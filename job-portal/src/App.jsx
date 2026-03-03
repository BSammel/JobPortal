import { 
  BrowserRouter as Router, 
  Route,
   Routes,
   Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import JobSeekerDashboard from './Pages/JobSeeker/JobSeekerDashboard';
import JobDetails from './Pages/JobSeeker/JobDetails';
import SavedJob from './Pages/JobSeeker/SavedJob';
import UserProfile from './Pages/JobSeeker/UserProfile';
import EmployerDashboard from './Pages/Employer/EmployerDashboard';
import ApplicationViewer from './Pages/Employer/ApplicationViewer';
import PostJob from './Pages/Employer/JobPostingForm';
import ManageJobs from './Pages/Employer/ManageJobs';
import EmployerProfilePage from './Pages/Employer/EmployerProfilePage';
import ProtectedRoute from './Routers/ProtectedRoute';

const App = () => {
  return (
    <div >

      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/find-job" element={<JobSeekerDashboard/>} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/saved-jobs" element={<SavedJob />} />
          <Route path="/user-profile" element={<UserProfile />} />

          {/*Protected Routes*/}
          <Route element={<ProtectedRoute requiredRoles="employer" />}> 
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/company-profile" element={<EmployerProfilePage />} />
            <Route path="/applications" element={<ApplicationViewer />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="manage-jobs" element={<ManageJobs />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className:"",
          style: {
            fontSize: "13px",
                      }
          }}
          />

    </div>
  )
}

export default App