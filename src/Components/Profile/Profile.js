// import avatar from "/Assets/Images/avatar.svg";
export default function Profile() {
  return (
    <div className="flex flex-col py-6 mx-auto max-w-7xl gap-6">
      {/* row-1 */}
      <div className="flex h-40 w-full border rounded-xl shadow-lg">
        <div className=" h-[155px] w-40 bg-[#004FC1] rounded-lg my-auto">
          {/* <img src={avatar} alt={"img"}/> */}
        </div>
        <div className="flex w-full justify-between">
          <div className="p-4 flex flex-col justify-between text-base font-bold text-[#0B1547] leading-6 text-left ">
            <span>User Name</span>
            <span>Fresher</span>
            <span>9876543210</span>
            <span>username@gmail.com</span>
          </div>
          <div className="flex flex-col justify-between p-4 items-end">
            <button className=" text-[#0B1547] text-base font-bold hover:cursor-pointer hover:underline">
              +Edit
            </button>
            <button className=" bg-[#004FC1] text-white text-base font-bold p-3 rounded-lg hover:border hover:border-[#004FC1] hover:text-[#004FC1] hover:bg-white">
              {" "}
              View Recommended Jobs
            </button>
          </div>
        </div>
      </div>
      {/* row-2 */}
      <div className="flex flex-col h-40 w-full bg-[#004FC1] border rounded-xl items-start p-4">
        <span className="text-base font-bold text-white">Hello UserName,</span>
        <span className="text-base font-bold text-white">
          Make your profile more trustworthy in 4 easy steps
          <br />
          Also, as a bonus you will be creadited 1000 Tokens.
        </span>
        <button className="h-10 bg-white px-3 rounded-lg text-base font-bold mt-4 text-[#004FC1] hover:border hover:border-white hover:text-white hover:bg-[#004FC1]">
          Get started
        </button>
      </div>
      {/* row-3 */}
      <div className="flex gap-6 w-full">
        <div className=" flex flex-col w-3/4 gap-6 ">
          {/* col-1 div-1 work  */}
          <div className="flex flex-col border rounded-xl shadow-lg items-start p-4 gap-4">
            <div className=" flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <span> Work Experience</span>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span>Software Engineer</span>
              <span>ideyalabs</span>
              <span>19 Aug, 2021 to present</span>
            </div>
          </div>
          {/* col-1 div-2 education  */}
          <div className="flex flex-col border rounded-xl shadow-lg items-start p-4 gap-4">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <span>Education Details</span>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span>Master in Computer Application (M.C.A), Computers</span>
              <span>Fergusson College, Pune</span>
              <span>2020 (Full time)</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span>Bachlor's in Computer Application (B.C.A)</span>
              <span>Fergusson College, Pune</span>
              <span>2018 (Full time)</span>
            </div>
          </div>
          {/* col-1 div-3 project  */}
          <div className="flex flex-col border rounded-xl shadow-lg items-start p-4 gap-4">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <span>Projects</span>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span className="font-semibold">i-hire </span>
              <span>ideyalabs</span>
              <span>Jan 2023 to Mar 2023</span>
              <span>It is hiring application. The system include functionalities such as job posting 
                and applicant tracking, resume screening and filtering, interview scheduling and coordination, 
                candidate assessment and evaluation, and offer management and acceptance. The goal of a 
                hiring system project is to streamline and automate many of the tasks involved 
                in the recruitment and selection process, making it more efficient, objective, and scalable. 
                The system may be designed for use by hiring managers, recruiters, HR professionals, or a 
                combination of these stakeholders, depending on the needs and structure of the organization.</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span className="font-semibold">Event management </span>
              <span>ideyalabs</span>
              <span>Jan 2022 to july 2022</span>
              <span className="">It is event mangement application.This can include functionalities such as registration and ticketing, scheduling and agenda planning, venue and logistics management, communication and marketing tools, and post-event analysis and reporting.The system is designed for use by event organizers, attendees, vendors, or a combination of these stakeholders. The goal of an event management system project is to streamline and automate many of the tasks involved in organizing an event, making the process more efficient, cost-effective, and enjoyable for everyone involved.</span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-6 w-1/4">
          {/* col-2 div-1 Skills  */}
          <div className="flex flex-col border rounded-xl shadow-lg items-start p-4 gap-4">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <span>Skills</span>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
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
          <div className="flex flex-col border rounded-xl shadow-lg items-start p-4 gap-4">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <span>Courses & Certifications</span>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span>Full stack developer </span>
              <span>Bitcode</span>
            </div>
          </div>
          {/* col-2 div-2 Awards & Achievements*/}
          <div className="flex flex-col border rounded-xl shadow-lg items-start p-4 gap-4">
            <div className="flex justify-between w-full text-base font-bold leading-6 text-[#004FC1]">
              <span>Awards & Achievements</span>
              <span className="hover:cursor-pointer hover:underline">+Add</span>
            </div>
            <div className=" flex flex-col gap-1 text-left">
              <span>Start Performance </span>
              <span>Feb 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
