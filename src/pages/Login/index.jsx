import logo from "../../assets/ReachInbox.svg";
import google from "../../assets/google.svg";

const Login = () => {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]   bg-[rgba(0,0,0,1)]  ">
      <div className="logo py-4 flex justify-center items-center border-[.1px]  border-b-[#1c1c1c]">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center rounded-mdgap-5 main-content lg:w-[40%] m-auto bg-[linear-gradient(to_right,_rgba(17,18,20,1),_rgba(18,18,18,1))] lg:p-[4rem] max-sm:p-[1rem] border border-[#6c6c6c] rounded-md">
        <h3 className="text-[rgba(255,255,255,1)] font-[Open Sans] font-[600] text-[20px] text-center mb-10">
          Create a new account
        </h3>
        <button className="flex justify-center items-center gap-2 font-[Open Sans] font-[400] text-[16px] text-[rgba(204,204,204,1)] text-center  border-[.09px] border-[#868686] w-[80%] rounded-sm px-[1rem] py-[.5rem]">
          <img src={google} alt="google icon" className="mt-1" />
          Sign up with google
        </button>
        <button className="bg-[linear-gradient(to_right,_rgba(75,99,221,1),_rgba(5,36,191,0.99))]  px-8 py-2 rounded-sm font-[Open Sans] font-[600] text-[14px] text-[rgba(255,255,255,1)] text-center mt-10">
          Create an Account
        </button>
        <button className="font-[Open Sans] font-[400] text-[16px] text-[rgba(204,204,204,1)] text-center mt-5">
          Already have an account? Sign In
        </button>
      </div>
      <div className="lg:grid lg:grid-cols-[auto_1fr_auto] flex flex-col gap-1 place-content-center place-items-center justify-center items-center px-4 py-2 bg-[rgba(37,38,43,1)]">
        <div className="text-[rgba(204,204,204,1)] ">Logo</div>
        <div className="  font-[Open Sans] font-[400] text-[12px] text-[rgba(204,204,204,1)]">
          © 2023 Reachinbox. All rights reserved.
        </div>
        <div className="text-[rgba(204,204,204,1)]">
          social links
        </div>
      </div>
    </div>
  );
};

export default Login;
