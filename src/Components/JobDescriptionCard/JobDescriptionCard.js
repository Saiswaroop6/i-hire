import React from "react";

export default function JobDescriptionCard({ job }) {
  return (
    <div className="p-5 rounded-lg shadow-xl">
      <div className="border-b-[1px] border-solid flex justify-between">
        <div>
          <h1 className="font-semibold text-[#004FC1] text-lg">Software Engineer</h1>
          <h1 className="text-lg font-semibold text-gray-500">iBaaS</h1>
        </div>
        <button
          type="button"
          className=" bg-[#004FC1] text-white px-2 rounded-lg h-8"
        >
          Apply Now
        </button>
      </div>
      <p className="font-semibold">india, Pune</p>
      <div className="flex font-semibold text-gray-500 gap-x-4">
        <p>362 views</p>
        <p>120 Applied</p>
      </div>
      <div>
        <h1 className="font-semibold text-[#004FC1] mt-5">Job Description</h1>
        <p>
          Danfoss is looking for an experienced person having solid experience
          in Embedded Systems Software Testing using LabVIEW and TestStand, in
          accordance with Software Testing Life Cycle. This person will be
          responsible to guide and coach the team as well as independently write
          test cases and develop scripts based on defined software requirements.
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-[#004FC1] mt-5">Job Responsibilities</h1>
        <p>
          Responsibilities for this position include, but are not limited to,
          the following. . Writing Software testcase specification and
          management . Scripting the test cases per test case specification .
          Testing, test executing and reporting
        </p>
        <h1 className="font-semibold text-[#004FC1] mt-5">Background & Skills</h1>
        <p>
          Education B.E/B. Tech/M.Tech/Master
          (Electronics/Telecommunications/Computers Science)OR equivalent
          Certified LabVIEW Associate Developer (CLAD) is must Certified LabVIEW
          Developer (CLD) is preferred Experience & Attributes . 3 or more years
          of experience in Embedded software testing using LabVIEW and NI Test
          Stand Creating Test strategies . Excellent communication skills,
          spoken and written English Must have specialized knowledge . LabVIEW,
          LabVIEW Realtime and FPGA(Basic) . NI TestStand Understands CAN
          Communication & Protocols like UDS, KWP2000, CANopen and J1939 Test
          Specification Management & Tools like Polarion or Equivalent Change
          Management & Tools like JIRA/VSTS Version control & Tools like
          SVN/GIT/Clearcase Understands Traceability management & Tools like
          Reqtify or equivalent Understands Software Architecture & Design
          Software Test Life Cycle . SDLC, Agile Scrum Optional specialized
          knowledge Functional Safety life-cycle & Management - Applies to
          software testing Safety standards like - IEC-61508, ISO-26262,
          ISO-25119, ISO-13849
        </p>
      </div>
    </div>
  );
}
