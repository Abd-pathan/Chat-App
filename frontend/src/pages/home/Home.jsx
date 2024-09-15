import React from 'react';
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/SideBar";
import BackToTop from "../../components/BackToTop"; // Adjust the import path based on your directory structure

const Home = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row h-full sm:h-[450px] md:h-[640px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
      <BackToTop />
    </div>
  );
};

export default Home;
