import React from "react";
import coverImage from "../../assets/images/cover.png";
import avatar from "../../assets/images/avatar.png";
import media from "../../assets/images/media.png";
import Peronsal7 from "../../assets/images/Peronsal7.png";
import Peronsal3 from "../../assets/images/Peronsal3.png";
import Peronsal6 from "../../assets/images/Peronsal6.png";
import comment from "../../assets/images/comment.png";
import heart from "../../assets/images/heart.png";
import Share from "../../assets/images/Share.png";
import dots from "../../assets/images/dots.png";



const Posts = ({title,img}) => {
  return (
    <div>
      <div class="w-full shadow-fb rounded bg-white p-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img src={avatar} alt="img" class="h-10 w-10 rounded-full" />
            <div class="ml-4">
              <span class="cursor-pointer font-bold">Ahmad Nur Fawaid</span>

              <br />
              <span class="text-fGrey text-opacity-50 text-sm">
                November 16, 2021
              </span>
            </div>
          </div>
          <button class="w-9 h-9 s flex items-center justify-center focus:outline-none">
            <img
            src={dots}
            alt="img"
            class="w-5 h-2 "
          />
          </button>
        </div>
        <div class="w-full mt-4">
          {title}
        </div>
{img&&(
    <div class="flex space-x-4">
          <img
            src={Peronsal7}
            alt="img"
            class="w-1/2 h-78 object-cover mt-4 rounded"
          />
          <div class="flex flex-col space-y-4">
            <img
              src={Peronsal3}
              alt="img"
              class="w-60 h-1/2 object-cover mt-4 rounded"
            />
            <img
              src={Peronsal6}
              alt="img"
              class="w-60 h-1/2 object-cover mt-4 rounded"
            />
          </div>
        </div>
)}
        

        <div class="border border-fGray border-opacity-10 mt-4" />
        <div class="flex justify-between items-center mt-4">
        <button class="w-1/2 flex items-center justify-center focus:outline-none">
          <img
            src={comment}
            alt="img"
            class="w-5 h-5 "
          />
            <span class="ml-3 text-fGrey text-opacity-50"> 7 Comments</span>
          </button>
          <button class="w-1/2 flex items-center justify-center focus:outline-none">
            <img
            src={heart}
            alt="img"
            class="w-5 h-5 "
          />
            <span class="ml-3 text-fGrey text-opacity-50">12 Likes</span>
          </button>
       
          <button class="w-1/2 flex items-center justify-center focus:outline-none">
          <img
            src={Share}
            alt="img"
            class="w-5 h-5 "
          />
            <span class="ml-3 text-fGrey text-opacity-50">0 Share</span>
          </button>
        </div>
        <div class="border border-fGray border-opacity-10 mt-4" />
        <div class="flex space-x-2 mt-4">
          <img src={avatar} alt="img" class="h-10 w-10 rounded-full" />
          <input
            class="bg-fFill px-4 py-3 w-full focus:outline-none rounded-lg"
            placeholder="Write your comment "
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
