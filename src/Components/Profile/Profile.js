// import avatar from "/Assets/Images/avatar.svg";
import { useNavigate } from "react-router";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ProfileTracker from "../ProfileTracker/ProfileTracker";
import { useState } from "react";

export default function Profile() {
  const [showTracker, setShowTracker] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 py-6 mx-auto max-w-7xl">
      {/* row-1 */}
      <div className="flex w-full border shadow-lg rounded-xl">
        <div className="w-48 h-48 m-4 rounded-lg ">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={"img"}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="p-4 flex flex-col justify-between text-base font-bold text-[#004FC1] leading-6 text-left ">
            <span>User Name</span>
            <span>Fresher</span>
            <span>9876543210</span>
            <span>username@gmail.com</span>
          </div>
          <div className="flex flex-col items-end justify-between p-4">
            <EditOutlinedIcon className="text-[#004FC1] cursor-pointer" />
            <div className="flex gap-x-4">
              <button
                type="button"
                className="bg-[#004FC1] text-white text-base font-bold p-2 rounded-lg border border-white hover:border-[#004FC1] hover:text-[#004FC1] hover:bg-white"
              >
                Upload Resume
                <span>
                  <FileUploadIcon />
                </span>
              </button>
              <button
                type="button"
                className="bg-[#004FC1] text-white text-base font-bold p-2 rounded-lg border border-white hover:border-[#004FC1] hover:text-[#004FC1] hover:bg-white"
                onClick={() => navigate("/jobs")}
              >
                View Recommended Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* row-2 */}
      {!showTracker ? (
        <div className="flex flex-col h-40 w-full  bg-gradient-to-b from-[#004fc1] to-[#91bfff] border rounded-xl items-start p-4">
          <span className="text-base font-bold text-white">
            Hello UserName,
          </span>
          <span className="text-base font-bold text-white">
            Make your profile more trustworthy in 4 easy steps
            <br />
            Also, as a bonus you will be creadited 1000 Tokens.
          </span>
          <button
            type="button"
            onClick={() => {
              setShowTracker(true);
            }}
            className="h-10 bg-white px-3 rounded-lg text-base font-bold mt-4 text-[#004FC1] hover:border hover:border-white hover:text-white hover:bg-[#004FC1]"
          >
            Get started
          </button>
        </div>
      ) : (
        <ProfileTracker />
      )}
      {/* row-3 */}
      <div className="flex w-full gap-6">
        <div className="flex flex-col w-3/4 gap-6 ">
          {/* col-1 div-1 work  */}
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className=" flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div className="flex items-center">
                <WorkOutlineOutlinedIcon />
                <span className="ml-2">Work Experience</span>
              </div>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span>Software Engineer</span>
              <span>ideyalabs</span>
              <span>19 Aug, 2021 to present</span>
            </div>
          </div>
          {/* col-1 div-2 education  */}
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div className="flex items-center">
                <SchoolOutlinedIcon />
                <span className="ml-2">Education Details</span>
              </div>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span>Master in Computer Application (M.C.A), Computers</span>
              <span>Fergusson College, Pune</span>
              <span>2020 (Full time)</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span>Bachlor's in Computer Application (B.C.A)</span>
              <span>Fergusson College, Pune</span>
              <span>2018 (Full time)</span>
            </div>
          </div>
          {/* col-1 div-3 project  */}
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div className="flex items-center">
                <FactCheckOutlinedIcon />
                <span className="ml-2">Projects</span>
              </div>

              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span className="font-semibold">i-hire </span>
              <span>ideyalabs</span>
              <span>Jan 2023 to Mar 2023</span>
              <span>
                It is hiring application. The system include functionalities
                such as job posting and applicant tracking, resume screening and
                filtering, interview scheduling and coordination, candidate
                assessment and evaluation, and offer management and acceptance.
                The goal of a hiring system project is to streamline and
                automate many of the tasks involved in the recruitment and
                selection process, making it more efficient, objective, and
                scalable. The system may be designed for use by hiring managers,
                recruiters, HR professionals, or a combination of these
                stakeholders, depending on the needs and structure of the
                organization.
              </span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span className="font-semibold">Event management </span>
              <span>ideyalabs</span>
              <span>Jan 2022 to july 2022</span>
              <span className="">
                It is event mangement application.This can include
                functionalities such as registration and ticketing, scheduling
                and agenda planning, venue and logistics management,
                communication and marketing tools, and post-event analysis and
                reporting.The system is designed for use by event organizers,
                attendees, vendors, or a combination of these stakeholders. The
                goal of an event management system project is to streamline and
                automate many of the tasks involved in organizing an event,
                making the process more efficient, cost-effective, and enjoyable
                for everyone involved.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/4 gap-6 ">
          {/* col-2 div-1 Skills  */}
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div className="flex items-center">
                <PsychologyOutlinedIcon />
                <span className="ml-2">Skills</span>
              </div>

              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span>JavaScript </span>
              <span>React Js</span>
              <span>Node Js</span>
              <span>Redux</span>
              <span>React Query</span>
              <span>HTML</span>
              <span>SCSS,Tailwind</span>
            </div>
          </div>
          {/* col-2 div-2  Courses & Certifications */}
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div>
                <BadgeOutlinedIcon />
                <span className="ml-2">Courses & Certifications</span>
              </div>

              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span>Full stack developer </span>
              <span>Bitcode</span>
            </div>
          </div>
          {/* col-2 div-2 Awards & Achievements*/}
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div className="flex items-center">
                <EmojiEventsOutlinedIcon />
                <span className="ml-2">Awards & Achievements</span>
              </div>

              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <span>Start Performance </span>
              <span>Feb 2023</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 p-4 border shadow-lg rounded-xl">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <div className="flex items-center">
                <PictureAsPdfOutlinedIcon />
                <span className="ml-2">Resume</span>
              </div>

              <span className="hover:cursor-pointer hover:underline">
                Update
              </span>
            </div>
            <div className="flex flex-col gap-1 text-left ">
              <div className="flex items-center">
                <span className="mr-2">Johns resume.pdf </span>
                <FileDownloadOutlinedIcon className="text-[#004fc1] cursor-pointer" />
              </div>
              <span>Last Updated:Feb 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
