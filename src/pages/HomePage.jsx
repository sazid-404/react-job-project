import React from 'react'
import Hero from '../component/Hero'
import HomeCard from '../component/HomeCards'
import JobListings from '../component/jobListings'
import ViewAllJobs from '../component/ViewAllJobs'


const HomePage = () => {
  return (
    <>
       <Hero/>
       <HomeCard/>
       <JobListings/>
       <ViewAllJobs/>
    </>
  )
}

export default HomePage