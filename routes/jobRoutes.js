const express = require("express");

const {

    createJobs,
    getJobs,
    getJobById,
    updateJob,
    deleteJob, 
    toggleCloseJob,
    getJobsEmployer
} = require("../controllers/jobController");

const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createJobs).get(getJobs);
router.route("/get-jobs-employer").get(protect, getJobsEmployer);
router.route("/:id").get(getJobById).put(protect, updateJob).delete(protect, deleteJob);
router.put("/:id/toggle-close", protect, toggleCloseJob);


module.exports = router;