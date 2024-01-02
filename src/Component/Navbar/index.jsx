import React from 'react';
import logo from '../../assets/images/company.png'; 
import search from '../../assets/images/search.png'; 
import avatar from '../../assets/images/avatar.png'; 
import chat from '../../assets/images/chat.png'; 
import plus from '../../assets/images/plus.png'; 
import bell from '../../assets/images/bell.png'; 
import down from '../../assets/images/down.png'; 

const Navbar = () => {
  return (
    <div class="h-16 flex items-center justify-between w-screen shadow-fb px-40 py-2">
      <div class="text-fBlack font-medium ml-2 pr-3">
      <img
        src={logo}
        // class="rounded-tl"
        alt="photo"
      />
          </div>


        <div class="h-10 w-64 flex items-center rounded-full bg-fFill p-3">
        <img
        src={search}
        class="rounded-tl"
        alt="photo"
      />
          <input
            class="text-fGrey ml-2 bg-fFill focus:outline-none"
            placeholder="Search"
          />
        </div>

    

      <div class="flex space-x-2">

      <div class="w-36 h-10  rounded-lg border  flex justify-center items-center">
         

        <span class="text-fGrey pr-4">Explore</span>
         
         <img
           src={down}
           class="w-4 h-2"
           alt="profile"
         />
       </div>

      <div class="w-10 bg-fButton rounded-full flex justify-center items-center relative">
         

          <img
            src={bell}
            class="rounded-full border w-9 border-fButton"
            alt="profile"
          />
        </div>

      <div class="w-10 bg-fButton flex items-center justify-center relative rounded-full">
         
          <img
            src={chat}
            class="rounded-full border w-9 border-fButton"
            alt="profile"
          />
        </div>
        <div class="w-10 bg-fButton flex items-center justify-center relative rounded-full ">
         
        <img
            src={plus}
            class="rounded-full border w-9 border-fButton"
            alt="profile"
          />
        </div>

        <button class="h-9 p-1 flex items-center rounded-full ">
          <img
            src={avatar}
            class="rounded-full border w-9 border-fButton"
            alt="profile"
          />
         
        </button>

      </div>
    </div>
  );
};

export default Navbar;
