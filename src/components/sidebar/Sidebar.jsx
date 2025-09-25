import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {
  MdContactSupport,
  MdDescription,
  MdKeyboardVoice,
  MdRecordVoiceOver,
} from "react-icons/md";
import { FaMusic, FaRegQuestionCircle } from "react-icons/fa";
import brandlogo from "../../assets/image/logo.png";
import {
  PiDesktopFill,
  PiFilmSlateFill,
  PiFilmStripLight,
} from "react-icons/pi";
import { IoImageSharp, IoNewspaper } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CgCaptions } from "react-icons/cg";
import { BsPersonVideo2 } from "react-icons/bs";
import { TbPhotoVideo } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import  imagetovideo from "../../assets/social_logos/image-to-video-logo.png"
import  aicaption from "../../assets/social_logos/ai-caption-logo.png"
import  autohash from "../../assets/social_logos/auto-hasing-logo.png"
import  realistic from "../../assets/social_logos/realistic-logo.png"
import autoeditlogo from "../../assets/social_logos/auto-video-edit-logo.png";
import  shortvideo from "../../assets/social_logos/short-video-logo.png"
import platform from "../../assets/social_logos/platform-logo.png";



const Sidebar = ({ closeDrawer }) => {
  const [active, setActive] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <MdDescription className="w-5 h-5" />,
      label: "Script to video",
      Link: "/dashboard/script-to-video",
    },
    {
      icon: <PiFilmSlateFill className="w-5 h-5" />,
      label: "AI Video Generator",
      Link: "/dashboard/ai-video-generator",
    },
    {
      icon: <img src={imagetovideo} alt="Image to Video" className="w-5 h-5" />, 
      label: "Image-to-Video",
      Link: "/dashboard/image-to-video",
    },
    {
      icon: <img src={aicaption} alt="Image to Video" className="w-5 h-5" />, 
      label: "AI Caption Generator",
      Link: "/dashboard/ai-caption-generator",
    },

    {
      icon: <IoImageSharp className="w-5 h-5" />,
      label: "AI Image Generator",
      Link: "/dashboard/ai-image-generator",
    },
    {
      icon: <MdKeyboardVoice className="w-5 h-5" />,
      label: "Text-to-Video",
      Link: "/dashboard/text-to-video",
    },
    {
      icon: <img src={autohash} alt="Image to Video" className="w-5 h-5" />, 
      label: "Auto Caption & Hashtags",
      Link: "/dashboard/auto-caption-hashtags",
    },
        {
      icon: <img src={realistic} alt="Image to Video" className="w-5 h-5" />, 
      label: "Realistic Voiceover",
      Link: "/dashboard/realistic-voiceover",
    },
        {
      icon:  <img src={autoeditlogo} alt="Image to Video" className="w-5 h-5" />, 
      label: "Auto Video Editing",
      Link: "/dashboard/auto-video-editing",
    },

            {
      icon: <img src={shortvideo} alt="Image to Video" className="w-5 h-5" />, 
      label: "Shorts Video Editor",
      Link: "/dashboard/shorts-video-editor",
    },
            {
      icon: <MdKeyboardVoice className="w-5 h-5" />,
      label: "Text-to-Video-generator",
      Link: "/dashboard/text-to-video-generator",
    },
                {
      icon: <img src={platform} alt="Image to Video" className="w-5 h-5" />, 
      label: "PlatformResizing",
      Link: "/dashboard/platform-resizing",
    },


    {
      icon: <SiGoogleanalytics className="w-5 h-5" />,
      label: "Analytics & SEO Tools",
      Link: "/dashboard/analytics-seo-tools",
    },
    {
      icon: <FaMusic className="w-5 h-5" />,
      label: "Background Audio",
      Link: "/dashboard/background-audio",
    },
        {
      icon: <FaRegQuestionCircle className="w-5 h-5" />,
      label: "Chatbot Support",
      Link: "/dashboard/chatbot-support",
    },

  ];

  const filterMenuItems = (items) => {
    return items.filter((item) => {
      if (item.isDropdown && item.subItems) {
        const filteredSubItems = item.subItems.filter((subItem) =>
          subItem.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredSubItems.length > 0) {
          item.subItems = filteredSubItems;
          return true;
        }
      }
      return item.label.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const filteredItems = filterMenuItems(menuItems);

  return (
    <div className=" h-full p-3 bg-[#030c2b] w-72 ">
     <div 
       className="flex flex-col items-center justify-center py-16 border-2 shadow-md border-amber-50 rounded-2xl"
  style={{
    boxShadow: "0px 0px 14px 1px rgba(50,124,254,0.75)",
  }}
     >
       <div className="mx-auto">
        <Link to={"/"}> 
        <img src={brandlogo} alt="Logo" />
        </Link>
      </div>
      <div className="relative pt-8 mb-4 ml-6"></div>
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-150px)]">
        {filteredItems.map((item) => (
          <div key={item.label}>
            <div
              className={`flex justify-between  items-center px-5 py-2  cursor-pointer transition-all rounded-lg ${
                active === item.label
                  ? "text-white font-semibold"
                  : "text-white"
              }`}
              onClick={() =>
                item.isDropdown
                  ? setOpenDropdown(
                      openDropdown === item.label ? "" : item.label
                    )
                  : setActive(item.label)
              }
            >
              <Link to={item.Link} className="flex items-center w-full gap-3">
                <span>
                  {item.icon}
                </span>
                <p className={`${
                    active === item.label ? "text-blue-500" : "text-white"
                  }`}>{item.label}</p>
                {item.isDropdown && (
                  <BiChevronDown
                    className={`${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Sidebar;
