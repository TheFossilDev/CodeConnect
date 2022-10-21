import Image from "next/image";
import ButtonSmall from "../components/ButtonSmall";
import Checkbox from "../components/UI/Checkbox";
import Input from "../components/UI/Input";

const Auth = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 h-4/6 border-solid border-2 rounded-lg flex flex-col items-center justify-evenly">
          <Image src="/LogoMark.png" alt="CodeConnect Logo" width="128px" height="128px" />
          {/* Form elements */}
          <div className="w-5/6 flex flex-col items-center justify-center"> 
            <h1 className="text-2xl mb-6">Sign in with email</h1>
            <Input type="text" placeHolder="ataylorjoy@gmail.com" />
            <Input type="password" placeHolder="password" />
            <div className="flex justify-between items-center w-full mt-5">
              <Checkbox label="Remember me"/>
              <ButtonSmall text="Login"/>
            </div>
            <a href="/register" className="mt-4 text-indigo-500 hover:text-indigo-400 hover:underline cursor-pointer">No account? Register</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;