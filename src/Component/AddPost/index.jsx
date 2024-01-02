
import React from 'react';
import coverImage from '../../assets/images/cover.png';
import avatar from '../../assets/images/avatar.png';

const AddPost = () => {
    return (
    <div>
    <div class="w-full shadow-fb rounded bg-white p-4">
      <div class="flex space-x-2">
        <img
          src={avatar}
          alt="img"
          class="h-10 w-10 rounded-full"
        />
        <input
          class="bg-fFill px-4 py-3 w-full focus:outline-none rounded-full"
          placeholder="Write something to Roland…"
        />
      </div>
      <div class="border border-fGray border-opacity-10 mt-4" />
      {/* <div className="flex justify-between">
        <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
          <Image />
          <span className="text-fGrey text-opacity-80 font-medium ml-2">
            Photo/Video
          </span>
        </button>
        <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
          <Tag />
          <span className="text-fGrey text-opacity-80 font-medium ml-2">
            Tag Friends
          </span>
        </button>
        <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
          <Feeling />
          <span className="text-fGrey text-opacity-80 font-medium ml-2">
            Feelling/Activity
          </span>
        </button>
      </div> */}
    </div>
  </div>
    )
};

export default AddPost;
