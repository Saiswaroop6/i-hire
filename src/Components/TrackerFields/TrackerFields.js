import React from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export const AddPersonalDetails = ({ onSave }) => {
  const skillsFields = [
    { skill: "React Js", id: 1 },
    { skill: "Python", id: 2 },
    { skill: "SQL", id: 3 },
  ];
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center border-b-[1px]  pb-4 border-solid mt-2">
        <Person2OutlinedIcon className="text-[#004fc1] mr-2" />
        <h1 className="font-semibold text-[#004fc1] text-lg">
          Profile Details
        </h1>
      </div>
      <div className="flex pb-4 border-b-[1px] border-solid gap-x-4">
        <div className="relative flex">
          <img
            className="rounded-lg w-[180px] h-[180px]"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={"img"}
          />
          <EditOutlinedIcon className="absolute right-2 top-2 cursor-pointer rounded-full text-[#004fc1]" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-[#004fc1] mb-2">Profile</h1>
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="w-[320px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            className="w-[320px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Profile Headline"
            variant="outlined"
            className="w-[320px]"
          />
        </div>
        <div>
          <h1 className="font-semibold text-[#004fc1] mb-2">Bio</h1>
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Bio"
            variant="outlined"
            className="w-[320px]"
            multiline
            rows={4}
          />
          <div>
            <div className="flex justify-between">
              <h1 className="font-semibold text-[#004fc1] mb-2">Skills</h1>
              <EditOutlinedIcon className="text-[#004fc1] hover:cursor-pointer" />
            </div>
            {skillsFields?.map((each) => (
              <Chip
                label={each?.skill}
                //   onDelete={deleteSkill}
                className="!mr-2"
              />
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onSave}
          className="w-32 bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export const AddSkills = ({ onSave }) => {
  return (
    <div>
      <div className="flex items-center border-b-[1px]  pb-4 border-solid mt-2">
        <PsychologyOutlinedIcon className="text-[#004fc1] mr-2" />
        <h1 className="font-semibold text-[#004fc1] text-lg">Skills</h1>
      </div>
      <div className="flex flex-col pb-2 mt-4 border-b-[1px]">
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Skill 1"
          variant="outlined"
          className="w-[320px]"
        />
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Skill 2"
          variant="outlined"
          className="w-[320px]"
        />
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Skill 3"
          variant="outlined"
          className="w-[320px]"
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onSave}
          className="w-32 bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export const AddEducation = ({ onSave }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center border-b-[1px]  pb-4 border-solid mt-2">
        <SchoolOutlinedIcon className="text-[#004fc1] mr-2" />
        <h1 className="font-semibold text-[#004fc1] text-lg">Add Education</h1>
      </div>

      <div className="flex flex-col pb-4 border-b-[1px]  border-solid gap-x-4">
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Institute Name"
          variant="outlined"
          className="w-[320px]"
        />
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Location"
          variant="outlined"
          className="w-[320px]"
        />
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Field of Study"
          variant="outlined"
          className="w-[320px]"
        />
        <TextField
          helperText={"required"}
          id="outlined-basic"
          label="Degree Awarded"
          variant="outlined"
          className="w-[320px]"
        />
        <div className="flex gap-x-4">
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Grade Format"
            variant="outlined"
            className="w-[152px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Grade Awarded"
            variant="outlined"
            className="w-[152px]"
          />
        </div>
        <div className="flex gap-x-4">
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Start Date"
            variant="outlined"
            className="w-[152px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="End Date"
            variant="outlined"
            className="w-[152px]"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onSave}
          className="w-32 bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export const AddExperience = ({ onSave, onCancel }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center border-b-[1px]  pb-4 border-solid mt-2">
        <WorkOutlineOutlinedIcon className="text-[#004fc1] mr-2" />
        <h1 className="font-semibold text-[#004fc1] text-lg">Add Experience</h1>
      </div>
      <div className="h-[550px] overflow-y-auto">
        <div className="flex flex-col pb-4 border-b-[1px] border-solid gap-x-4">
          <h1 className="font-semibold text-[#004fc1] text-lg pb-4 mt-2">
            Job Details
          </h1>
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Job Title"
            variant="outlined"
            className="w-[320px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Company"
            variant="outlined"
            className="w-[320px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            className="w-[320px]"
          />
          <p>I currently work here</p>
        </div>
        <div className="flex flex-col pb-4 border-b-[1px] border-solid border-[#004fc1] gap-x-4">
          <h1 className="font-semibold text-[#004fc1] text-lg mt-2">Skills</h1>
          <p className="mb-2">
            Showcase skills that you worked on during
            <br /> this job position
          </p>
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Skill 1"
            variant="outlined"
            className="w-[320px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Skill 2"
            variant="outlined"
            className="w-[320px]"
          />
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Skill 3"
            variant="outlined"
            className="w-[320px]"
          />
        </div>
        <div className="flex flex-col pb-4 border-b-[1px] border-solid gap-x-4">
          <h1 className="font-semibold text-[#004fc1] text-lg mt-2">
            Job Description
          </h1>
          <p className="mb-2">
            Showcase what you worked on during
            <br /> this job position
          </p>
          <TextField
            helperText={"required"}
            id="outlined-basic"
            label="Job Description"
            variant="outlined"
            className="w-[320px]"
            multiline
            rows={4}
          />
        </div>
        <div className="flex justify-end mt-4 gap-x-2">
          <button
            onClick={onSave}
            className="w-32 bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="w-32 bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
