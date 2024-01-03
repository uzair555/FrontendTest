import React from "react";
import coverImage from "../../assets/images/cover.png";
import avatar from "../../assets/images/avatar.png";
import edit from "../../assets/images/edit.png";

const CoverImage = () => {
  return (
    <div class="mx-52 shadow bg-white mt-4 rounded-xl">
      <div class="relative h-96 rounded-t-xl flex justify-center">
        <img
          src={coverImage}
          class="object-cover w-full h-full rounded-t-xl "
          alt="cover"
        />
        <div class="absolute -bottom-20 left-10">
          <img
            src={avatar}
            //   class="object-cover border-10 border-white w-40 h-40 rounded-full shadow-md"
            style={{
              border: "4px solid white",
              borderRadius: "50%",
              width: "150px",
              height: "150px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            alt="cover"
          />
        </div>
      </div>
      <div class="flex items-center justify-between mr-4">
        <div>
          <div class="ml-56 mt-6 text-3xl font-bold text-fBlack">
            Ahmad Nur Fawaid
          </div>
          <div class="text-fGrey text-opacity-50 ml-56">@fawait</div>
        </div>
        <button class="flex items-center bg-fOrange w-31 h-9  border border-gray-300 rounded-md px-4">
          <img src={edit} class="w-4 h-4 mr-1" alt="edit" />

          <span class="text-white">Edit Profile</span>
        </button>
      </div>

      <div class="border border-fGrey mt-6 border-opacity-10" />
      <div class="flex justify-between px-8"></div>
    </div>
  );
};

export default CoverImage;
