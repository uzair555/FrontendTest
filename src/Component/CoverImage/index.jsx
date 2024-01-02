
import React from 'react';
import coverImage from '../../assets/images/cover.png';
import avatar from '../../assets/images/avatar.png';

const CoverImage = () => {
  return (
    // <div
    
    // className="relative bg-cover bg-center h-64 w-[994px] md:flex md:items-center"
    // style={{
    //   backgroundImage: `url(${coverImage})`,
    //   borderRadius: '12px 12px 0 0',
    // }}
    // >
    // </div>

    <div class="px-44 shadow m-10 ">
    <div class="relative h-96 rounded-b flex justify-center">
      <img
        src={coverImage}
        class="object-cover w-full h-full rounded-b"
        alt="cover"
      />
      <div class="absolute -bottom-20 left-10">
        <img
          src={avatar}
        //   class="object-cover border-10 border-white w-40 h-40 rounded-full shadow-md"
        style={{
            border: '4px solid white',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          alt="cover"
        />
      </div>
    </div>
    <div class="ml-56 mt-6 text-3xl font-bold text-fBlack">
    Ahmad Nur Fawaid
    </div>
    <div class="border border-fGrey mt-6 border-opacity-10" />
    <div class="flex justify-between px-8">
     
    </div>
  </div>
  );
};

export default CoverImage;

