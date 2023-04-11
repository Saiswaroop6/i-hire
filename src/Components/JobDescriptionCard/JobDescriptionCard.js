import React, { useState } from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ModalDialog from "../ModalDialog/ModalDialog";

export default function JobDescriptionCard({ job }) {
  const [apply, setApply] = useState(false);
  const onClose = () => {
    setApply(false);
  };
  return (
    <div className="p-5 border border-solid rounded-lg shadow-lg">
      <div className="border-b-[1px] border-solid flex justify-between">
        <div>
          <h1 className="font-semibold text-[#004FC1] text-lg">
            Software Engineer
          </h1>
          <h1 className="text-lg font-semibold text-gray-500">iBaaS</h1>
          <p className="mb-2 font-semibold text-gray-500">Job ID: 40879361</p>
        </div>
        <div className="flex">
          <button
            type="button"
            className="bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 mr-2 hover:bg-white hover:text-[#004fc1]"
          >
            Save
            <BookmarkBorderOutlinedIcon className="ml-2" />
          </button>
          <button
            onClick={() => {
              setApply(true);
            }}
            type="button"
            className=" bg-[#004FC1] font-semibold text-white px-2 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
          >
            Apply Now
          </button>
          <ModalDialog
            open={apply}
            handleClose={() => {
              onClose();
            }}
          >
            <p>Apply job</p>
          </ModalDialog>
        </div>
      </div>
      <div className="h-[560px] overflow-y-auto">
        <div className="flex flex-col mt-2 gap-y-2">
          <div className="flex items-center">
            <LocationOnOutlinedIcon className="text-[#004fc1]" />
            <p className="ml-2">india, Pune</p>
          </div>
          <div className="flex items-center">
            <WorkOutlineOutlinedIcon className="text-[#004fc1]" />
            <p className="ml-2">0-5+</p>
          </div>
          <div className="flex items-center">
            <CurrencyRupeeOutlinedIcon className="text-[#004fc1]" />
            <p className="ml-2">5,00,000 - 6,00,000</p>
          </div>
          <div className="flex items-center">
            <RemoveRedEyeOutlinedIcon className="text-[#004fc1]" />
            <p className="ml-2">45,238</p>
          </div>
          <div className="flex items-center">
            <SendOutlinedIcon className="text-[#004fc1]" />
            <p className="ml-2">12000 Applied</p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-[#004FC1] mt-5">Job Description</h1>
          <p>
            Danfoss is looking for an experienced person having solid experience
            in Embedded Systems Software Testing using LabVIEW and TestStand, in
            accordance with Software Testing Life Cycle. This person will be
            responsible to guide and coach the team as well as independently
            write test cases and develop scripts based on defined software
            requirements.
          </p>
          <h1 className="font-semibold text-[#004FC1] mt-5">
            Job Responsibilities
          </h1>
          <p>
            Responsibilities for this position include, but are not limited to,
            the following. . Writing Software testcase specification and
            management . Scripting the test cases per test case specification .
            Testing, test executing and reporting
          </p>
          <h1 className="font-semibold text-[#004FC1] mt-5">
            Job Requirements
          </h1>
          <p>
            Bachelors degree in computer science, software engineering, or
            similar field. Proven work experience as a software test engineer.
            In-depth knowledge of program testing software including Bugzilla
            and HP LoadRunner. Advanced knowledge of debugging codes and
            software development languages. Experience working with popular
            operating systems including Windows and Linux. Strong attention to
            detail. Ability to collate data and compile test reports. Excellent
            software troubleshooting skills. Ability to design and write complex
            software testing procedures.
          </p>
          <h1 className="font-semibold text-[#004FC1] mt-5">
            Background & Skills
          </h1>
          <p>
            Education B.E/B. Tech/M.Tech/Master
            (Electronics/Telecommunications/Computers Science)OR equivalent
            Certified LabVIEW Associate Developer (CLAD) is must Certified
            LabVIEW Developer (CLD) is preferred Experience & Attributes . 3 or
            more years of experience in Embedded software testing using LabVIEW
            and NI Test Stand Creating Test strategies . Excellent communication
            skills, spoken and written English Must have specialized knowledge .
            LabVIEW, LabVIEW Realtime and FPGA(Basic) . NI TestStand Understands
            CAN Communication & Protocols like UDS, KWP2000, CANopen and J1939
            Test Specification Management & Tools like Polarion or Equivalent
            Change Management & Tools like JIRA/VSTS Version control & Tools
            like SVN/GIT/Clearcase Understands Traceability management & Tools
            like Reqtify or equivalent Understands Software Architecture &
            Design Software Test Life Cycle . SDLC, Agile Scrum Optional
            specialized knowledge Functional Safety life-cycle & Management -
            Applies to software testing Safety standards like - IEC-61508,
            ISO-26262, ISO-25119, ISO-13849
          </p>
          <h1 className="font-semibold text-[#004FC1] mt-5">More Info</h1>
          <div className="mb-4">
            <div className="flex items-center">
              <PortraitOutlinedIcon className="text-[#004fc1] text-base" />
              <p className="ml-2 font-semibold text-gray-500">JOB TYPE</p>
            </div>
            <p>Permanent Job</p>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <BusinessOutlinedIcon className="text-[#004fc1] text-base" />
              <p className="ml-2 font-semibold text-gray-500">INDUSTRY</p>
            </div>
            <p>IT/Computers - Software</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">
              About <span className="text-[#004fc1]">Danfoss</span>
            </h1>
            <h1 className="font-semibold">
              Job Source <span className="text-[#004fc1]">www.Danfoss.com</span>
            </h1>
          </div>
          <button
            type="button"
            className="bg-[#004FC1] font-semibold text-white px-3 rounded-lg border border-white hover:border-[#004fc1] h-10 hover:bg-white hover:text-[#004fc1]"
          >
            Follow
          </button>
        </div>
        <p>
          Danfoss engineers solutions that increase machine productivity, reduce
          emissions, lower energy consumption, and enable electrification. Our
          solutions are used in such areas as refrigeration, air conditioning,
          heating, power conversion, motor control, industrial machinery,
          automotive, marine, and off- and on-highway equipment. We also provide
          solutions for renewable energy, such as solar and wind power, as well
          as district-energy infrastructure for cities. Our innovative
          engineering dates back to 1933. Danfoss is family-owned, employing
          more than 42.000 people, serving customers in more than 100 countries
          through a global footprint of 95 factories.
        </p>
      </div>
    </div>
  );
}
