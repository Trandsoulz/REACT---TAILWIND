import SideBarIcon from "./SideBarIcon";
import { BsFillLightningFill, BsGearFill, BsDownload } from "react-icons/bs";
import { FaFire, FaPlus, FaDiscord, FaSafari } from "react-icons/fa";
const SideBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-gray-700 text-white h-full flex flex-col w-16 m-0 drop-shadow-xl">
        <SideBarIcon Icon={<FaDiscord size="26" />} text={"Home"} />
        <SideBarIcon Icon={<FaPlus size="26" />} text={"Add a server"} />
        <SideBarIcon
          Icon={<FaSafari size={"26"} />}
          text={"Explore Public servers"}
        />
        <SideBarIcon Icon={<BsDownload size={"26"} />} text="Download Apps" />
      </div>
    </>
  );
};

export default SideBar;
