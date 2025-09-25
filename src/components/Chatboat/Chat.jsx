import React from "react";
import chatImage from "../../assets/image/chatbot.png";
import chatbtnbg from "../../assets/image/chatbtnbg.png";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <img src={chatImage} alt="" />
          <div
            style={{
              backgroundImage: `url(${chatbtnbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="py-[30px]  "
          >
          <div className="flex justify-end mr-16">
              <Link to={"/dashboard/ai-chatbot-support"}>
              <button
              className="px-5   py-3 rounded-md font-bold text-white 
               bg-[linear-gradient(178deg,rgba(50,124,254,1)_2%,rgba(34,68,119,1)_100%)]"
            >
              Chat
            </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
