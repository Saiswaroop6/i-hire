import PropTypes from "prop-types"
import React from 'react'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

export default function JobsCard({job,selectedJobId,onClick = () => {}}) {
  return (
    <button className={`p-5 flex flex-col border border-solid rounded-xl text-left shadow-lg hover:border-[#004FC1] gap-y-4 ${selectedJobId===job?.id?'border-[#004FC1]':''}`}>
        <div><h1 className="font-semibold text-[#004FC1]">{job?.jobTitle}</h1>
        <h1 className="font-semibold text-gray-500">{job?.companyName}</h1></div>
        <div className="flex items-center">
        <PortraitOutlinedIcon className="text-[#004fc1] text-base"/>
        <p className="ml-2 text-gray-500">{job?.jobType}</p>
        </div>
        <div className="flex items-center">
          <LocationOnOutlinedIcon className="text-[#004fc1]"/>
          <p className="ml-2 text-gray-500">{job?.jobLocation}</p></div>
        <div className="flex items-center">
          <WorkOutlineOutlinedIcon className="text-[#004fc1]"/>
        <p className="ml-2 text-gray-500">{job?.experience}</p>
        </div>
        <div className="flex items-center">
        <PsychologyOutlinedIcon className="text-[#004fc1]"/>
        <p className="ml-2 text-gray-500">{job?.skills}</p>
        </div>
        <div className="flex items-center">
          <ScheduleOutlinedIcon className="text-[#004fc1]"/>
          <p className="ml-2 text-gray-500">{job?.postedDate}</p>
        </div> 
    </button>
  )
}

JobsCard.propTypes = {
  job: PropTypes.shape({
    companyName: PropTypes.string,
    experience: PropTypes.string,
    jobLocation: PropTypes.string,
    jobTitle: PropTypes.string,
    jobType: PropTypes.string,
    postedDate: PropTypes.string,
    skills: PropTypes.string
  }),
  selectedJobId:PropTypes.string
}
