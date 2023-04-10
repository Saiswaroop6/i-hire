import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import JobsCard from "../../Components/JobsCard/JobsCard";
import JobDescriptionCard from "../../Components/JobDescriptionCard/JobDescriptionCard";

export default function JobsList() {
  const [activeTab,setActiveTab]=useState(1);
  const [selectedJobId,setSelectedJobId]=useState('');
  const tabs = [
    { title: "Recommended", id: 1 },
    { title: "Applied", id: 2 },
    { title: "Saved", id: 3 },
  ];
  return (
    <div>
      <Header />
      <div className="px-2 mx-auto mb-5 max-w-7xl sm:px-6 lg:px-6">
      <h1 className="text-xl mx-auto mt-10 font-semibold border-solid border-b-[1px] pb-3 mb-3">
        Job Feed
      </h1>
      <div className="flex pb-3 gap-x-4 border-solid border-b-[1px] mb-3">{tabs?.map((each) => (
        <button type="button" className={`text-xl ${activeTab===each?.id?'text-[#0B1547] font-semibold':' text-gray-500'}`} onClick={()=>{setActiveTab(each?.id)}}>{each?.title}</button>
      ))}</div>
      <div className="flex gap-x-5">
        <div className="flex flex-col w-2/5 gap-y-5">
        {dummyJobsData?.map(each=>(
          <JobsCard job={each} onClick={()=>{setSelectedJobId(each?.id)}} selectedJobId={selectedJobId}/>
        ))}  
      </div>
      <div className="w-3/5"><JobDescriptionCard/></div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}


const dummyJobsData=[
  {companyName: 'IdeyaLabs',
  id:1,
    experience: '3+',
    jobLocation: 'India',
    jobTitle: 'Web Developer',
    jobType: 'Fulltime',
    postedDate: '12-04-2023',
    skills: 'React,HTML,CSS'},
    {companyName: 'IdeyaLabs',
    experience: '1+',
    id:2,
    jobLocation: 'India',
    jobTitle: 'Developer',
    jobType: 'Fulltime',
    postedDate: '12-04-2023',
    skills: 'React'},
    {companyName: 'IdeyaLabs',
    experience: '3+',
    id:3,
    jobLocation: 'India',
    jobTitle: 'Web Developer',
    jobType: 'Fulltime',
    postedDate: '12-04-2023',
    skills: 'React,Python,HTML'},
    {companyName: 'IdeyaLabs',
    experience: '3+',
    id:4,
    jobLocation: 'India',
    jobTitle: 'Web Developer',
    jobType: 'Fulltime',
    postedDate: '12-04-2023',
    skills: 'React'},
    {companyName: 'IdeyaLabs',
    experience: '3+',
    id:5,
    jobLocation: 'India',
    jobTitle: 'Web Developer',
    jobType: 'Fulltime',
    postedDate: '12-04-2023',
    skills: 'React'}
]
