import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from "react-router";


export default function UserProfile() {
    const [showSkills,setShowSkills]=useState(false);
    const [showCareerTips,setShowCareerTips]=useState(false);
    const [showCategories,setShowCategories]=useState(false);
    const navigate=useNavigate();
  const navigationTabs = [
    { name: "Recommended Jobs", id: 1 },
    { name: "My Profile", id: 2 },
    { name: "My Profile Tracker", id: 3 },
    { name: "Manage Job Alerts", id: 4 },
    { name: "Settings", id: 5 },
    { name: "Feedback", id: 6 },
    { name: "Logout", id: 7 },
  ];

  const skills = [
    { skillName: "Back-end Developer", id: 1 },
    { skillName: "Front-end Developer", id: 2 },
    { skillName: "Full-stack Developer", id: 3 },
    { skillName: "Data Analyst", id: 4 },
  ];

  const careerTips=[
    {tipType:'Job Search Strategy',id:1},
    {tipType:'Resume & Cover Letter',id:2},
    {tipType:'Interview Tips',id:3},
    {tipType:'Career Management',id:4},
    {tipType:'Salary Negotiations',id:5}
  ]

  const JobCategories=[
    {category:'Jobs by Location',id:1},
    {category:'Jobs by Skills',id:2},
    {category:'Jobs by Title',id:3},
    {category:'Jobs by Industry',id:4}

  ]

  const pageNavigation=(id)=>{
    if(id===1){
      navigate('/jobs');
    }
    else if(id===2){
      navigate('/')
    }

  }
  return (
    <div className="flex flex-col p-5 w-[300px] gap-y-5 overscroll-none">
      <div className="shadow-lg rounded-xl">
        <div className="p-3 bg-[#004FC1] rounded-xl">
          <div className="flex flex-row items-center pb-4 border-b-2 border-white">
            <img
              alt="profile"
              className="w-12 h-12 mr-5 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <p className="font-semibold text-white">John</p>
          </div>
          <div className="flex flex-col mt-3 gap-y-4">
            {navigationTabs.map((each) => (
              <button
                className="text-left text-white hover:underline"
                type="button"
                onClick={()=>
                pageNavigation(each?.id)
              }
              >
                {each?.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#004fc1] bg-opacity-20 rounded-xl p-2'>
      <button className="flex justify-between w-full" type='button' onClick={()=>{setShowSkills(!showSkills)}}>
        <p className="text-[#004fc1] font-semibold">Skill Tests</p>
        <KeyboardArrowDownIcon className={`text-[#004fc1] ${showSkills&&'rotate-180'}` } />
      </button>
      {showSkills&&<div className="flex flex-col pl-3 rounded-lg gap-y-2">
        {skills?.map((each) => (
          <button type='button' className="flex justify-between p-2 pr-0">
            <p className="text-[#004fc1] font-semibold">{each?.skillName}</p>
            <KeyboardArrowDownIcon className="text-[#004fc1]" />
          </button>
        ))}
      </div>}
      </div>
      <button className="flex text-[#004fc1] font-semibold bg-[#004fc1] bg-opacity-20 rounded-xl p-2" type='button'>Resume Builder</button>
      <div className='bg-[#004fc1] bg-opacity-20 rounded-xl p-2'>
      <button className="flex justify-between w-full" type='button' onClick={()=>{setShowCategories(!showCategories)}}>
        <p className="text-[#004fc1] font-semibold">Job Categories</p>
        <KeyboardArrowDownIcon className={`text-[#004fc1] ${showCategories&&'rotate-180'}` } />
      </button>
      {showCategories&&<div className="flex flex-col pl-3 rounded-lg gap-y-2">
        {JobCategories?.map((each) => (
          <button type='button' className="flex justify-between p-2 pr-0">
            <p className="text-[#004fc1] font-semibold">{each?.category}</p>
            <KeyboardArrowDownIcon className="text-[#004fc1]" />
          </button>
        ))}
      </div>}
      </div>
      <div className='bg-[#004fc1] bg-opacity-20 rounded-xl p-2'>
      <button className="flex justify-between w-full" type='button' onClick={()=>{setShowCareerTips(!showCareerTips)}}>
        <p className="text-[#004fc1] font-semibold">Career Tips</p>
        <KeyboardArrowDownIcon className={`text-[#004fc1] ${showCareerTips&&'rotate-180'}` } />
      </button>
      {showCareerTips&&<div className="flex flex-col pl-3 rounded-lg gap-y-2">
        {careerTips?.map((each) => (
          <button type='button' className="flex justify-between p-2 pr-0">
            <p className="text-[#004fc1] font-semibold">{each?.tipType}</p>
            <KeyboardArrowDownIcon className="text-[#004fc1]" />
          </button>
        ))}
      </div>}
      </div>
    </div>
  );
}
