import Image from "next/image";
import ButtonSmall from "../components/ButtonSmall";
import Checkbox from "../components/UI/Checkbox";
import Input from "../components/UI/Input";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 h-4/6 border-solid border-2 rounded-lg flex items-center justify-evenly">
          {/* Form elements */}
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="w-2/3">
              <h1 className="text-4xl mb-2">Welcome back</h1>
              <h3 className="text-l mb-4 text-gray-500">Sign in with email</h3>
              <Input type="text" placeHolder="ataylorjoy@gmail.com" label="Email"/>
              <Input type="password" placeHolder="password" label="Password"/>
              <div className="flex justify-between items-center w-full mt-5">
                <Checkbox label="Remember me" />
                <ButtonSmall text="Login" />
              </div>
              <a
                href="/register"
                className="mt-4 text-sky-500 hover:text-sky-400 hover:underline cursor-pointer"
              >
                No account? Register
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full bg-slate-50 flex justify-center items-center">
            <Image
              src="/LogoMark.png"
              alt="CodeConnect Logo"
              width="256px"
              height="256px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
