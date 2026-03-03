const fs = require("fs");
const path = require('path');
const User = require("../models/User");
// Update user profile
exports.updateProfile = async (req, res) => {
    try{
        const { name, avatar, resume, companyName, companyDescription, companyLogo } = req.body;
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        user.name = name || user.name;
        user.resume = resume || user.resume;
        user.avatar = avatar || user.avatar;

        if(user.role === "employer"){
            user.companyName = companyName || user.companyName;
            user.companyDescription = companyDescription || user.companyDescription;
            user.companyLogo = companyLogo || user.companyLogo;
        }
        
        await user.save();

        res.json({
            _id: user._id,
            name: user.name,
            avatar: user.avatar,
            resume: user.resume || '',
            role: user.role,
            companyName: user.companyName,
            companyDescription: user.companyDescription,
            companyLogo: user.companyLogo
        });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};
// Delete user resume
exports.deleteResume = async (req, res) => {
    try{
        const {resumeUrl} = req.body;

        const fileName = resumeUrl?.split('/')?.pop();

        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        if(user.role !== "jobseeker"){
            return res.status(403).json({ message: "Only jobseekers can delete their resume" });
        }

        const filePath = path.join(__dirname, '../uploads', fileName);
        if(fs.existsSync(filePath)){
        fs.unlink(filePath) 
        }

        //set the user resume into an empty string
        user.resume = '';
        await user.save();

        res.json({ message: "Resume deleted successfully" });
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};

exports.getPublicProfile = async (req, res) => {
    try{
        const user = await User.findById(req.params.id).select("-password");
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
};