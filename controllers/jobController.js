const Job = require("../models/job");
const User = require("../models/User"); 
const application = require("../models/Application");
const SavedJobs = require("../models/SavedJobs");

// create new job 
exports.createJob = async (req, res) => {
    try{


    }catch(err) {
        res.status(500).json({message: err.message});
    }

};

exports.getJobs = async (req, res) => {
 try{


    }catch(err) {
        res.status(500).json({message: err.message});
    }


};
