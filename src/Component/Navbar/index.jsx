import React from 'react';
import logo from '../../assets/images/company.png'; 
import search from '../../assets/images/search.png'; 
import avatar from '../../assets/images/avatar.png'; 
import chat from '../../assets/images/chat.png'; 
import plus from '../../assets/images/plus.png'; 
import bell from '../../assets/images/bell.png'; 
import exp from '../../assets/images/exp.png'; 

const Navbar = () => {
  return (
    <div>
    <div className="h-14 flex justify-between w-screen shadow-fb px-4 py-2">
      <div className="flex">
      <div className="text-fBlack font-medium ml-2 pr-3">
      <img
        src={logo}
        className="rounded-tl"
        alt="photo"
      />
          </div>
        <div className="h-10 w-64 ml-2 flex items-center rounded-full bg-fFill p-3">
        <img
        src={search}
        className="rounded-tl"
        alt="photo"
      />
          <input
            className="text-fGrey ml-2 bg-fFill focus:outline-none"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* <div className="flex space-x-24 items-center">
        <button className="focus:outline-none">
          <Home />
        </button>
        <button className="focus:outline-none">
          <Watch />
        </button>
        <button className="focus:outline-none">
          <Groups />
        </button>
        <button className="focus:outline-none">
          <Feed />
        </button>
      </div> */}

      <div className="flex space-x-2">

      <div className="w-20 h-10 bg-fButton rounded-full flex justify-center items-center relative">
         

         {/* <img
           src={exp}
           className="rounded-full border w-10 border-fButton"
           alt="profile"
         /> */}
         explore
       </div>

      <div className="w-10 bg-fButton rounded-full flex justify-center items-center relative">
         

          <img
            src={bell}
            className="rounded-full border w-9 border-fButton"
            alt="profile"
          />
        </div>

      <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full">
         
          <img
            src={chat}
            className="rounded-full border w-9 border-fButton"
            alt="profile"
          />
        </div>
        <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full ">
         
        <img
            src={plus}
            className="rounded-full border w-9 border-fButton"
            alt="profile"
          />
        </div>

        <button className="h-9 p-0.5 flex items-center rounded-full focus:outline-none">
          <img
            src={avatar}
            className="rounded-full border w-9 border-fButton"
            alt="profile"
          />
         
        </button>

        {/*

      

       

        <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full">
          <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
            <div className="text-sm text-white text-center">3</div>
          </div>
          <DownArrow borderColor="#1d1f23" />
        </div> */}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
