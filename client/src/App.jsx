import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Application from './pages/Application'
import ApplyJob from './pages/ApplyJob'
import Home from './pages/Home'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJobs from './pages/AddJobs'
import ManageJobs from './pages/ManageJobs'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css'

const App = () => {
  const {showRecruiterLogin}=useContext(AppContext)
  return (
    <div> {showRecruiterLogin &&
      <RecruiterLogin/>}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/apply-job/:id' element={<ApplyJob/>}/>
      <Route path='/applications' element={<Application/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='add-job' element={<AddJobs/>}/>
      <Route path='manage-jobs' element={<ManageJobs/>}/>
      <Route path='view-applications' element={<ViewApplications/>}/>

      </Route>


      </Routes>
    </div>
  )
}

export default App
