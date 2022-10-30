import Image from "next/image";
import ButtonSmall from "../components/ButtonSmall";
import Checkbox from "../components/UI/Checkbox";
import Input from "../components/UI/Input";

// TODO: Connect to context
// TODO: Finalize sizing

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 h-4/6 border-solid border-2 rounded-lg flex items-center justify-evenly">
          {/* Form elements */}
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="w-2/3">
              <h1 className="text-4xl mb-2">Create new account</h1>
              <div className="flex justify-start items-center mb-4">
                <h3 className="text-l text-gray-500 mr-2">Already have an account?</h3>
                <a
                  href="/register"
                  className="text-sky-500 hover:text-sky-400 hover:underline cursor-pointer"
                  >
                  Log In
                </a>
              </div>
              <Input type="text" placeHolder="AnyaTaylor" label="Username (Public)"/>
              <Input type="text" placeHolder="ataylorjoy@gmail.com" label="Email"/>
              <div className="flex items-center justify-evenly">
                <Input type="password" placeHolder="password" label="Password"/>
                <Input type="password" placeHolder="passwords must match" label="Retype"/>
              </div>
              <div className="flex justify-between items-center w-full mt-5">
                <Checkbox label="Keep me logged in" />
                <ButtonSmall text="Login" />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full bg-slate-50 flex justify-center items-center">
            {/* <Image
              src="/Developers.jpg"
              width="1920"
              height="1152"
              alt="Developers working on software"
            /> */}
            <Image
              src="/LogoMark.png"
              alt="CodeConnect Logo"
              width="256"
              height="256"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
