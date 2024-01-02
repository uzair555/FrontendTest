// src/components/ProfilePage.jsx
import React from 'react';
import CoverImage from '../CoverImage';
import ProfileAvatar from '../ProfileAvatar';

const ProfilePage = () => {
  return (
    <div className="flex justify-center ">
      <div className="m-2 mt-4 p-4 bg-white rounded-lg shadow-lg w-[999px]">
        <div className="">
          <CoverImage />
        </div>
        <div className="">
          <ProfileAvatar />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
