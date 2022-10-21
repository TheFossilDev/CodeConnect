import IconText from "../components/IconText";
import {
  FaMapPin,
  FaPaperclip,
  FaGraduationCap,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const Profile = () => {
  return (
    <>
      <h1 className="text-center">ColeWestbrook</h1>
      <div className="flex justify-center items-center">
        <div className="w-60 h-48 bg-gray-100 flex flex-col justify-center items-end">
          <IconText icon={<FaMapPin />} text={"Charleston, SC"} />
          <IconText icon={<FaPaperclip />} text={"Open to work"} />
          <IconText icon={<FaPhoneAlt />} text={"(843)867-5309"} />
        </div>
        <svg
          className="w-48 h-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 122.88"
        >
          <title>person-profile-image</title>
          <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM49.28,71.35c.26-2.18-6.23-10.54-7.41-14.54-2.54-4-3.44-10.46-.68-14.73,1.11-1.69.63-3.16.63-5.51,0-23.24,40.7-23.24,40.7,0,0,2.94-.67,3.63.92,6,2.66,3.86,1.29,10.72-1,14.3C81,61,74.24,69,74.71,71.37c.42,11.92-25.5,11.53-25.43,0v0Zm-31,20.07c3.25-3.6,9.09-3.76,16.17-7.36a74.7,74.7,0,0,0,7.75-4.53c8.22,10.08,15,21.16,12.78,34.05a52.65,52.65,0,0,0,6.44.4c.55,0,1.09,0,1.64,0-.5-15.14,8.38-26.21,17.79-35.63A68.55,68.55,0,0,0,96.33,86c4.62,1.54,7.39,2.53,9,4.3a52.54,52.54,0,1,0-87,1.08Z" />
        </svg>
        <div className="w-60 h-48 bg-gray-100 flex flex-col justify-center items-start">
          <IconText
            icon={<FaBuilding />}
            text={"College of Charleston"}
            reversed={true}
          />
          <IconText
            icon={<FaGraduationCap />}
            text={"Graduates May 2023"}
            reversed={true}
          />
          <IconText
            icon={<FaEnvelope />}
            text={"goatfacts@gmail.com"}
            reversed={true}
          />
        </div>
      </div>
      {/* Cards container */}
      <div className="flex justify-evenly m-6">
        <div className="shadow-md bg-slate-100 h-96 w-96 rounded-xl">
          <h1 className="text-center">Bio</h1>
          <h2 className="text-center">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vulputate erat vitae enim commodo vehicula. Nam velit magna, dictum
            nec risus a, molestie rhoncus nunc. Duis ac ante eu orci lacinia
            faucibus et et orci.
          </p>
          <h2>Skills / Languages</h2>
          <p>Java, CSS, HTML</p>
        </div>
        <div className="shadow-md bg-slate-100 h-96 w-96 rounded-xl">
          <h2 className="text-center">Pinned Projects</h2>
          <ProjectCard
            title="362 Proj"
            desc="Cool project for 362"
            workType="Creator"
          />
          <ProjectCard
            title="362 Proj"
            desc="Cool project for 362"
            workType="Creator"
          />
          <ProjectCard
            title="362 Proj"
            desc="Cool project for 362"
            workType="Creator"
          />
        </div>
        <div className="shadow-md bg-slate-100 h-96 w-96 rounded-xl">
          <h2 className="text-center">Active Projects</h2>
          <ProjectCard
            title="362 Proj"
            desc="Cool project for 362"
            workType="Creator"
          />
          <ProjectCard
            title="362 Proj"
            desc="Cool project for 362"
            workType="Creator"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
