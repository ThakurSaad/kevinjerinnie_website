import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ConfigProvider, Drawer, Modal } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSettings, IoMdClose } from "react-icons/io";
import Sidebar from "../../components/sidebar/Sidebar";
import { TbCrown } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false); // New state for the account modal
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false); // New state for password change modal
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false); // New state for upgrade plan modal
  const location = useLocation();
  const navigate = useNavigate();

  // Format path name nicely
  const formatPathName = (pathname) => {
    const parts = pathname.split("/").filter(Boolean);
    const lastPart = parts[parts.length - 1] || "Dashboard";
    return (
      lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, " ")
    );
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const isAuthPage =
    location.pathname === "/signin" ||
    location.pathname === "/forgate-password" ||
    location.pathname === "/verify-otp" ||
    location.pathname === "/new-password";

  if (isAuthPage) {
    return <Outlet />;
  }

  const handleMenuItemClick = (path) => {
    // Open the account modal when the account button is clicked
    if (path === "/account") {
      setIsProfileModalOpen(false);
      setIsAccountModalOpen(true);
      return;
    }
    // Open the password modal when the password change button is clicked
    if (path === "/password-change") {
      setIsProfileModalOpen(false);
      setIsPasswordModalOpen(true);
      return;
    }
    // Open the upgrade modal when the upgrade plan button is clicked
    if (path === "/upgrade-plan") {
      setIsProfileModalOpen(false);
      setIsUpgradeModalOpen(true);
      return;
    }
    navigate(path);
    setIsProfileModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030c2b] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 bg-[#030c2b] shadow-sm lg:ml-72 subtract-width">
        <div className="flex items-center justify-between py-4 ">
          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-bold">
              {/* {formatPathName(location.pathname)} */}
            </h1>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4 cursor-pointer md:mr-8">
            <div className="items-center justify-center hidden w-10 h-10 overflow-hidden bg-[#030c2b] rounded-full md:flex"></div>
            <div className="hidden text-right gap-x-5 md:flex ">
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[#FFC107] rounded-full ">
                  <TbCrown size={35} />
                </div>
                <h3 className="text-lg font-bold text-white">Upgrade</h3>
              </div>
              {/* Profile Button */}
              <div
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center justify-center w-10 h-10 text-white bg-[#327CFE] rounded-full cursor-pointer"
              >
                <p>N</p>
              </div>
            </div>

            <button className="block lg:hidden" onClick={showDrawer}>
              <RxHamburgerMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex ">
        {/* Sidebar for large screens */}
        <div className="fixed left-0 hidden w-64 h-full bg-[#030c2b] shadow-md lg:block ">
          <Sidebar />
        </div>

        {/* Mobile Drawer */}
        <ConfigProvider
          theme={{
            components: {
              Drawer: {
                colorBgElevated: "#ffffff",
              },
            },
          }}
        >
          <Drawer
            placement="right"
            width="100%"
            onClose={onClose}
            open={open}
            closeIcon={<IoMdClose className="text-2xl" />}
          >
            <Sidebar />
          </Drawer>
        </ConfigProvider>

        {/* Main Content */}
        <div className="flex-1 p-5 bg-[#030c2b] text-white overflow-y-auto lg:ml-72">
          <Outlet />
        </div>
      </div>

      {/* Profile Modal */}
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              colorBgElevated: "#030c2b",
              colorBgMask: "rgba(0,0,0,0.85)",
            },
          },
        }}
      >
        <Modal
          open={isProfileModalOpen}
          footer={null}
          onCancel={() => setIsProfileModalOpen(false)}
          style={{ position: "absolute", top: 70, right: 20 }}
          bodyStyle={{ padding: "0px", borderRadius: "8px" }}
        >
          <div className="flex flex-col gap-2 p-4 text-white">
            <button
              onClick={() => handleMenuItemClick("/account")}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-[#1a203f] transition-colors"
            >
              <FaRegUser />
              <p>Account</p>
            </button>
            <button
              onClick={() => handleMenuItemClick("/password-change")}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-[#1a203f] transition-colors"
            >
              <IoIosSettings />
              <p>Password Change</p>
            </button>
            <button
              onClick={() => handleMenuItemClick("/upgrade-plan")}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-[#1a203f] transition-colors"
            >
              <TbCrown />
              <p>Upgrade Plan</p>
            </button>
            <Link
              to={"/dashboard/sign-up"}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-[#1a203f] transition-colors"
            >
              <HiOutlineLogout />
              <p>Logout</p>
            </Link>
          </div>
        </Modal>

        {/* Account Modal */}
        <Modal
          open={isAccountModalOpen}
          onCancel={() => setIsAccountModalOpen(false)}
          footer={null}
          closeIcon={<IoMdClose className="text-3xl text-white" />}
          bodyStyle={{
            background: "#030c2b",
            padding: "30px",
            borderRadius: "15px",
          }}
          style={{ top: "20vh" }}
        >
          <div className="flex flex-col items-center p-4">
            <div className="relative mb-8">
              <img
                src="https://placehold.co/100x100/A0A0A0/ffffff?text=User"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-[#327cfe]"
              />
              <div className="absolute bottom-0 right-0 p-1 bg-[#327cfe] rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 4h4.5l2-2h3l2 2H20a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 4a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              </div>
            </div>

            <div className="w-full space-y-4 text-white">
              <div>
                <label className="text-gray-400">Name</label>
                <input
                  type="text"
                  value="Nahid Hossain"
                  readOnly
                  className="w-full p-2 mt-1 text-white bg-transparent border-b border-gray-500 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-400">Phone Number</label>
                <input
                  type="text"
                  value="+880 1840-560614"
                  readOnly
                  className="w-full p-2 mt-1 text-white bg-transparent border-b border-gray-500 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-400">Location</label>
                <input
                  type="text"
                  value="1650 Broadway, New York City, NY 10019-6833"
                  readOnly
                  className="w-full p-2 mt-1 text-white bg-transparent border-b border-gray-500 rounded-md focus:outline-none"
                />
              </div>
            </div>

            <button className="w-full mt-8 p-3 text-white font-bold bg-[#327cfe] rounded-md transition-colors hover:bg-blue-600">
              Update
            </button>
          </div>
        </Modal>

        {/* Password Change Modal */}
        <Modal
          open={isPasswordModalOpen}
          onCancel={() => setIsPasswordModalOpen(false)}
          footer={null}
          closeIcon={<IoMdClose className="text-3xl text-white" />}
          bodyStyle={{
            background: "#030c2b",
            padding: "30px",
            borderRadius: "15px",
          }}
          style={{ top: "20vh" }}
        >
          <div className="flex flex-col items-center p-4">
            <h2 className="mb-6 text-xl font-bold text-white">
              Change Password
            </h2>
            <div className="w-full space-y-4 text-white">
              <div>
                <label className="text-gray-400">Current Password</label>
                <input
                  type="password"
                  className="w-full p-2 mt-1 text-white bg-transparent border border-gray-500 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-400">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 mt-1 text-white bg-transparent border border-gray-500 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="text-gray-400">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full p-2 mt-1 text-white bg-transparent border border-gray-500 rounded-md focus:outline-none"
                />
              </div>
            </div>
            <button className="w-full mt-8 p-3 text-white font-bold bg-[#327cfe] rounded-md transition-colors hover:bg-blue-600">
              Update
            </button>
          </div>
        </Modal>

        {/* Upgrade Plan Modal */}
        <Modal
          open={isUpgradeModalOpen}
          onCancel={() => setIsUpgradeModalOpen(false)}
          footer={null}
          closeIcon={<IoMdClose className="text-3xl text-white" />}
          width={900}
          bodyStyle={{
            background: "#030c2b",
            padding: "30px",
            borderRadius: "15px",
          }}
          style={{ top: "10vh" }}
        >
          <div className="flex flex-col p-4">
            <h2 className="mb-6 text-xl font-bold text-center text-white">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Basic Plan */}
              <div className="bg-[#1a203f] p-6 rounded-xl flex flex-col items-center text-white">
                <h3 className="mb-2 text-xl font-bold">Basic Video</h3>
                <p className="mb-4 text-3xl font-bold">$3.99/video</p>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Up to 1 min video</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>AI script + captions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Stock media + music</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Auto hashtags & emojis</p>
                  </div>
                </div>
                <button className="w-full mt-6 p-3 text-white font-bold bg-[#327cfe] rounded-md transition-colors hover:bg-blue-600">
                  Get Started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-[#1a203f] p-6 rounded-xl flex flex-col items-center text-white">
                <h3 className="mb-2 text-xl font-bold">Pro Video</h3>
                <p className="mb-4 text-3xl font-bold">$7.99/video</p>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Up to 3 min video</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Voiceover + emotion</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Smart transitions + music</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Platform-specific formatting</p>
                  </div>
                </div>
                <button className="w-full mt-6 p-3 text-white font-bold bg-[#327cfe] rounded-md transition-colors hover:bg-blue-600">
                  Get Started
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-[#1a203f] p-6 rounded-xl flex flex-col items-center text-white border-4 border-[#327cfe]">
                <h3 className="mb-2 text-xl font-bold">Premium Video</h3>
                <p className="mb-4 text-3xl font-bold">$12.99/video</p>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Up to 5 min video</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Emotional voiceover + avatar</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>AI SEO & analytics</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <p>Interactive elements</p>
                  </div>
                </div>
                <button className="w-full mt-6 p-3 text-white font-bold bg-[#327cfe] rounded-md transition-colors hover:bg-blue-600">
                  Get Started
                </button>
              </div>
            </div>
            <p className="mt-6 text-center text-white cursor-pointer hover:underline">
              Compare all plans
            </p>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default MainLayout;
