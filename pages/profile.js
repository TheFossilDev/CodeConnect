import {
  FaCrown,
  FaPlus,
  FaUserClock,
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
} from "react-icons/fa";
import NavBar from "../components/UI/NavBar";
import ButtonPrimary from "../components/UI/Buttons/ButtonPrimary";

import { firebaseAuth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import FlatOutlineCard from "../components/UI/FlatOutlineCard";
import { useRouter } from "next/router";
import axios from "axios";

const profile = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const router = useRouter();
  const initialFormData = Object.freeze({
    uid: "",
    username: "",
    email: "",
    bio: "",
    skills: "",
    displayName: "",
  });
  const [formData, updateFormData] = useState({ initialFormData });



  useEffect(() => {
    if (!loading && error != null) {
      console.error(error);
    } else if (!loading && user != null) {
      axios.get("https://10.5.204.197:8000/user/profile/" + user.uid).then((res) => {
      updateFormData({
        ...formData,
        ["username"]: res.data.username,
        ["bio"]: res.data.bio,
        ["email"]: res.data.email,
        ["skills"]: res.data.skills,
        ["displayName"]: res.data.displayName,
      });
      console.log(res.data);
    });
      console.log(user);
    } else if (!loading) {
      router.push("/login");
    }
  }, [updateFormData, user, loading, error]);

  if (!loading && user != null)
    return (
      <>
        <div className="bg-slate-50 h-screen">
          <NavBar />
          <div className="h-full flex flex-col justify-start items-center">
            {/* Profile Card */}
            <FlatOutlineCard className="w-4/5 h-2/5 my-5 flex justify-around items-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-semibold text-2xl" >@{formData.displayName}</h2>
                <FaUserCircle size="175" />
                {/* Socials */}
                <div className="w-full flex justify-evenly">
                  <FaGithub size="35" cursor="pointer" />
                  <FaEnvelope size="35" cursor="pointer" />
                  <FaPhoneAlt size="35" cursor="pointer" />
                </div>
              </div>
              {/* Pinned project */}
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-3xl font-semibold m-1">Spotlit Project</h1>
                <div className="flex flex-col justify-start items-start w-[32rem] h-fit bg-white border-2 border-gray-200 rounded-lg p-2">
                  <div className="w-full flex justify-between">
                    <div className="flex justify-start">
                      <FaCrown className="m-1" size="56" color="gold" />
                      <div className="mt-1">
                        <h1 className="text-2xl font-semibold">
                          VLC Media Player
                        </h1>
                        <h3 className="text-lg text-gray-500">Contributor</h3>
                      </div>
                    </div>
                    <ButtonPrimary text="See more" />
                  </div>
                  <p className="m-1 text-gray-500">
                    Very popular media player compatible with every system. Open
                    source and developed entirely by the community
                  </p>
                  <div className="flex self-center justify-evenly items-start">
                    <div className="flex justify-center items-center mr-10">
                      <FaPlus color="green" />
                      <p>10,340 lines added</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <FaUserClock />
                      <p>732 hours contributed</p>
                    </div>
                  </div>
                </div>
              </div>
            </FlatOutlineCard>
            {/* Bottom half */}
            <div className="flex justify-center items-center h-2/5 w-4/5">
              <FlatOutlineCard className="h-full p-2 flex flex-shrink-0 flex-grow basis-1/3 flex-col">
                <h2 className="text-lg">About me</h2>
                <p className="text-gray-500"><i>What would you want here? Tell us during Q&A!</i></p>
              </FlatOutlineCard>
              <FlatOutlineCard className="h-full p-2 mx-6 flex-shrink-0 flex-grow basis-1/3">
                <h2 className="text-lg">Pinned Projects</h2>
                <div
                  onClick={() => router.push("/projects")}
                  className="hover:bg-sky-500 bg-sky-400 w-full m-h-10 h-fit p-3 cursor-pointer rounded-lg flex justify-center"
                >
                  <button className="text-white font-bold text-center">
                    No projects yet, add one
                  </button>
                </div>
              </FlatOutlineCard>
              <FlatOutlineCard className="h-full p-2 flex-shrink-0 flex-grow basis-1/3">
                <h2 className="text-lg">Recent Projects</h2>
                <div
                  onClick={() => router.push("/projects")}
                  className="hover:bg-sky-500 bg-sky-400 w-full m-h-10 h-fit p-3 cursor-pointer rounded-lg flex justify-center"
                >
                  <button className="text-white font-bold text-center">
                    No projects yet, add one
                  </button>
                </div>
              </FlatOutlineCard>
            </div>
          </div>
        </div>
      </>
    );
};

export default profile;
