import React from 'react';
import AvatarImage from '../../assets/images/avatar.png'; 

const ProfileAvatar = () => {
  return (
    <div className="flex justify-between w-[994px]"
    // style={{
    //     width:"994px"
    // }}
    >
      <img
        src={AvatarImage}
        alt="Profile Avatar"
        className="rounded-full w-24 h-24 border-4 border-white"
      />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileAvatar;
