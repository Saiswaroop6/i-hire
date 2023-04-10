import PropTypes from "prop-types"
import React from 'react'

export default function JobsCard({job,selectedJobId,onClick = () => {}}) {
  return (
    <button className={`p-5 border border-solid rounded-xl text-left shadow-lg hover:border-[#004FC1] ${selectedJobId===job?.id?'border-[#004FC1]':''}`}>
        <h1 className="font-semibold text-[#004FC1]">{job?.jobTitle}</h1>
        <h1 className="text-gray-500">{job?.companyName}</h1>
        <p className="text-gray-500">{job?.jobType}</p>
        <p className="text-gray-500">{job?.jobLocation}</p>
        <p className="text-gray-500">{job?.experience}</p>
        <p className="text-gray-500">{job?.skills}</p>
        <p className="text-gray-500">{job?.postedDate}</p>
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
