import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import HomeCards from './component/HomeCards'
import JobListings from './component/jobListings'
import ViewAllJobs from './component/ViewAllJobs'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default App