import avatar from "../../../src/Assets/Images/avatar.svg"
export default function ReviewCard() {
  return (
    <div className="h-[400px] w-[300px] border shadow-lg rounded-xl">
      <div className=" flex h-[75px] w-full bg-[#004FC1] p-5 mb-20 rounded-t-xl ">
        {/* <div className="h-[100px] rounded-full w-[100px] bg-[#004FC1] border-4 border-white border-solid ">
          <img src={avatar} alt="img" />
        </div> */}
         <img src={avatar} alt="img" className="h-[100px] rounded-full w-[100px] bg-[#004FC1] border-4 border-white border-solid " />
        <div className="flex flex-col">
          <div className="text-base font-bold leading-6 text-white mt-6 ml-2">
            Nikita Kavde
          </div>
          <div className="text-base font-bold leading-6 text-[#004FC1] mt-2 ml-2">
            * * * * *
          </div>
        </div>
      </div>
      <div className="text-base italic mx-5">
        "The i-Hire platform was a game-changer for our recruitment process. The
        automated screening and filtering saved us so much time and effort, and
        the virtual interview tools were top-notch. Highly recommend!"
      </div>
    </div>
  );
}
