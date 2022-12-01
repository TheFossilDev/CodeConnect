import {
  FaCrown,
  FaPlus,
  FaUserClock,
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaPencilAlt
} from "react-icons/fa";
import NavBar from "../components/UI/NavBar";
import ButtonPrimary from "../components/UI/Buttons/ButtonPrimary";
import ConfirmableModal from "../components/UI/Modal/ConfirmableModalEdit";
import Input from "../components/UI/FormElements/Input";
import TextArea from "../components/UI/FormElements/TextArea";
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

  const onCloseModal = () => {
    setEditingProfile(false);
  };
  const onOpenModal = () => {
    setEditingProfile(true);
  };

  const [editingProfile, setEditingProfile] = useState(false);

  const [editDisplayName, setEditDsiplayName] = useState("");
  const [editBio, setEditBio] = useState("");
  const [editSkills, setEditSkills] = useState("");

  


  useEffect(() => {
    if (!loading && error != null) {
      console.error(error);
    } else if (!loading && user != null) {
      axios.get("http://127.0.0.1:8000/user/profile/" + user.uid).then((res) => {
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

  const handleEditProfile = () => {
    axios.put("http://127.0.0.1:8000/user/edit/" + user.uid, {
      displayName: editDisplayName,
      bio: editBio,
      skills: editSkills,
      });  
    
    router.reload("/profile");
  };


  if (!loading && user != null)
    return (
      <div className="bg-slate-50 h-screen">
      {editingProfile ? (
        <ConfirmableModal
          className="w-2/3"
          onClose={onCloseModal}
          onConfirm={handleEditProfile}
          header="Edit Profile"
        >
          <form className="flex justify-evenly items-start">
            <div>
              <Input type="text" label="Edit Display Name" placeholder="Display name" defaultValue={formData.displayName}  onChange={(event) => setEditDsiplayName(event.target.value)} />
              <TextArea label="Edit Bio" placeholder="Bio" defaultValue={formData.bio}  onChange={(event) => setEditBio(event.target.value)} ></TextArea>
            </div>
            <div>
              <Input type="text" label="Edit Skills" placeholder="Skills" defaultValue={formData.skills}  onChange={(event) => setEditSkills(event.target.value)} />
            </div>
          </form>
        </ConfirmableModal>
      ) : null}
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
              <div>
            <div
              onClick={onOpenModal}
              className="flex justify-between items-center w-40 h-12 bg-sky-500 rounded-lg p-4 hover:bg-sky-300 hover:cursor-pointer"
            >
              <FaPencilAlt color="white" size="2rem" />
              <h2 className="text-white text-base font-semibold">
                Edit Profile
              </h2>
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
                <p className="text-gray-500"><i>{formData.bio}</i></p>
                <p className="text-gray-500"><i>Skills: {formData.skills}</i></p>
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
    );
};

export default profile;
