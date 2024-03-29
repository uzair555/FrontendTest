
import React from 'react';
import coverImage from '../../assets/images/cover.png';
import avatar from '../../assets/images/avatar.png';
import media from '../../assets/images/media.png';

const AddPost = () => {
    return (
    <div>
    <div class="w-full shadow-fb rounded bg-white p-4">
      <div class="flex items-center  space-x-2">
        <img
          src={avatar}
          alt="img"
          class="h-10 w-10 rounded-full"
        />
        <input
          class=" px-4 py-3 w-full  rounded-full"
          placeholder="Post something..."
        />
        <img
          src={media}
          alt="img"
          class="h-6 w-8 "
        />
      </div>
      
    </div>
  </div>
    )
};

export default AddPost;

