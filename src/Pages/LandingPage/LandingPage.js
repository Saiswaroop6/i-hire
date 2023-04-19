import Footer from "../../Components/Footer/Footer";
import interviewImage from "../../Assets/Images/interview.svg";
import Logo from "../../Assets/Images/logo-white.png";
import employeeProfile from "../../Assets/Images/employee-profile.svg";
import selectedProfile from "../../Assets/Images/selected-profile.svg";
import signUp from "../../Assets/Images/register.svg";
import importData from "../../Assets/Images/import-data.svg";
import blockchain from "../../Assets/Images/blockchain.svg";
import shareData from "../../Assets/Images/share-data.svg";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "./LandingPage.css";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      {/* section-1 */}
      <div className="gradient-border">
        <div className="pt-10 pb-40 mx-auto max-w-7xl ">
          {/* <span className="text-white text-7xl">iHire</span> */}
          <img src={Logo} alt="logo" />
          <div className="text-base italic text-white">
            " Transparency and Trust in the Job Market "
          </div>
          <div className="flex mt-24">
            <div>
              <div className="text-[48px] font-bold text-white text-left ">
                Find Your Dream Job
                <br />
                with the Power of <br />
                Blockchain Technology
              </div>
              <div className="text-[20px] font-bold text-white mt-4 ">
                A Revolutionary Job Portal Built on the Security and
                Transparency of Blockchain
              </div>
              <button
                onClick={() => {
                  navigate("/home");
                }}
                type="button"
                className=" bg-white p-3 border rounded-2xl text-3xl font-bold mt-4 text-[#0B1547] border-white hover:text-white hover:bg-[#0B1547]"
              >
                Connect
              </button>
            </div>
            <div>
              <img
                src={interviewImage}
                className="h-[400px] w-[550px]"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="bg-white">
        <div className="flex flex-col gap-20 mx-auto my-32 max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[#0B1547] text-5xl font-bold">
                Verified Employee Profiles
              </div>
              <div className="text-[#0B1547] text-2xl font-semibold mt-4">
                Connecting You with the Right Candidates
              </div>
              <div className="text-[#0B1547] text-xl mt-4 ">
                With our verified employee profiles on the blockchain,
                <br /> job seekers and employers can have confidence <br /> in
                the accuracy and security of their information.
              </div>
            </div>
            <div>
              <img
                src={employeeProfile}
                className="h-[500px] w-[500px]"
                alt="employee"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <img
                src={selectedProfile}
                className="h-[500px] w-[500px]"
                alt="employee"
              />
            </div>
            <div>
              <div className="text-[#0B1547] text-5xl font-bold">
                Verified Company Details
              </div>
              <div className="text-[#0B1547] text-2xl font-semibold mt-4">
                Empower job seekers with accurate and <br />
                transparent information
              </div>
              <div className="text-[#0B1547] text-xl mt-4 ">
                Job seekers can trust that the information provided by companies
                is
                <br />
                authentic and transparent, while also ensuring the privacy of
                <br />
                sensitive data.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="bg-gray-100 rounded-tl-[250px] rounded-br-[250px] my-20">
        <div className="py-40 mx-auto max-w-7xl">
          <div className="text-[#0B1547] text-5xl font-bold text-left">
            How Does It Work ?
          </div>
          <div className="flex justify-around mt-20">
            <div className="flex flex-col border shadow-xl rounded-xl items-center h-[250px] w-[250px]">
              <img src={signUp} className="h-[200px] w-[200px]" alt="sign-up" />
              <span className="font-semibold text-xl text-[#0B1547]">
                Sign Up
              </span>
            </div>
            <div className="flex flex-col border shadow-xl rounded-xl items-center h-[250px] w-[250px]">
              <img
                src={importData}
                className="h-[200px] w-[200px]"
                alt="sign-up"
              />
              <span className="font-semibold text-xl text-[#0B1547]">
                Import Your Data
              </span>
            </div>
            <div className="flex flex-col justify-around border shadow-xl rounded-xl items-center h-[250px] w-[250px]">
              <img
                src={blockchain}
                className="h-[150px] w-[200px]"
                alt="sign-up"
              />
              <span className="font-semibold text-xl text-[#0B1547]">
                Data On Blockchain
              </span>
            </div>
            <div className="flex flex-col border shadow-xl rounded-xl items-center h-[250px] w-[250px]">
              <img
                src={shareData}
                className="h-[200px] w-[200px]"
                alt="sign-up"
              />
              <span className="font-semibold text-xl text-[#0B1547]">
                Share Your profile
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* section-4 */}
      <div className="mx-auto my-20 max-w-7xl">
        <div className="text-[#0B1547] text-5xl font-bold text-center mb-20">
          Why iHire ?
        </div>
        <div className="flex justify-center gap-[50px]">
          <div className=" flex flex-col items-center h-[350px] w-[380px] border-4 border-[#004fc1] rounded-2xl p-8">
            <HandshakeIcon sx={"height:40px; width:40px; "} />
            <span className="text-2xl mt-6 underline font-semibold text-[#004fc1]">
              Trust and Transparency
            </span>
            <div className="mt-6 text-center">
              Our blockchain-based verification process ensures that employee
              and employer profiles are accurate, reliable, and tamper-proof,
              providing increased trust and transparency in the job market.
            </div>
          </div>
          <div className=" flex flex-col items-center h-[350px] w-[380px] border-4 border-[#004fc1] rounded-2xl p-8">
            <SecurityIcon sx={"height:40px; width:40px; "} />
            <span className="text-2xl mt-6 underline font-semibold text-[#004fc1]">
              Privacy and Security
            </span>
            <div className="mt-6 text-center">
              With the use of private keys and encryption, our platform offers a
              secure way to store and share sensitive data, ensuring the privacy
              and protection of job seekers' personal information.
            </div>
          </div>
          <div className=" flex flex-col items-center h-[350px] w-[380px] border-4 border-[#004fc1] rounded-2xl p-8">
            <AccessTimeFilledIcon sx={"height:40px; width:40px; "} />
            <span className="text-2xl mt-6 underline font-semibold text-[#004fc1]">
              Time and Cost Savings
            </span>
            <div className="mt-6 text-center">
              Our automated verification process reduces the time and cost
              associated with manual verification, enabling employers to quickly
              verify candidate credentials and qualifications and job seekers to
              apply to jobs with verified profiles.
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[50px] mt-10">
          <div className=" flex flex-col items-center h-[350px] w-[380px] border-4 border-[#004fc1] rounded-2xl p-8">
            <ManageHistoryIcon sx={"height:40px; width:40px; "} />
            <span className="text-2xl mt-6 underline font-semibold text-[#004fc1]">
              Efficiency and Accuracy
            </span>
            <div className="mt-6 text-center">
              Blockchain technology to match the best job candidates with
              employers, ensuring that employers are connected with the most
              suitable candidates for their job openings, resulting in increased
              efficiency and accuracy in the job matching process.
            </div>
          </div>
          <div className=" flex flex-col items-center h-[350px] w-[380px] border-4 border-[#004fc1] rounded-2xl p-8">
            <VerifiedUserIcon sx={"height:40px; width:40px; "} />
            <span className="text-2xl mt-6 underline font-semibold text-[#004fc1]">
              Authenticity of Job
            </span>
            <div className="mt-6 text-center">
              Our platform uses blockchain-based verification to validate the
              authenticity of job postings, preventing scams and fraud in the
              job market, and ensuring that job seekers can apply for jobs with
              confidence.
            </div>
          </div>
        </div>
      </div>

      {/* section-5 */}
      <div className="bg-[#004fc1] flex justify-between px-[220px] py-10 mt-2 text-white">
        <div className="text-center">
          <h1 className="text-4xl">120K+</h1>
          <p className="text-base font-semibold">JOB LISTINGS</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">80K+</h1>
          <p className="text-base font-semibold">RECRUITERS</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">120K+</h1>
          <p className="text-base font-semibold">JOB SEEKERS NETWORK</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">80K+</h1>
          <p className="text-base font-semibold">HIRED</p>
        </div>
      </div>

      {/* section-6 */}
      <div className="my-20">
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
}
