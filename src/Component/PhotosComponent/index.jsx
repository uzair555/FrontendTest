import React from "react";
import Peronsal1 from "../../assets/images/Peronsal1.png";
import Peronsal2 from "../../assets/images/Peronsal2.png";
import Peronsal5 from "../../assets/images/Peronsal5.png";
import Peronsal4 from "../../assets/images/Peronsal4.png";

const PhotosComponent = () => {
  return (
    <div class="w-full shadow-fb bg-white rounded p-4">
      <div class="flex justify-between items-center">
        <div class="text-xl font-bold text-fBlack">Photos</div>
        <button class="focus:outline-none text-fBlue">View All</button>
      </div>
      <div class="grid grid-cols-2 flex gap-1.5 mt-4">
        <img src={Peronsal1} class="rounded-tl w-60" alt="photo" />
        <img src={Peronsal4} class="rounded-tl w-60" alt="photo" />
        <img src={Peronsal2} class="rounded-tl w-60" alt="photo" />
        <img src={Peronsal5} class="rounded-tl w-60" alt="photo" />
        {/* <img src={Peronsal4} alt="photo" />
        <img src={Peronsal2} alt="photo" />
        <img src={Peronsal5} alt="photo" /> */}
      </div>
    </div>
  );
};

export default PhotosComponent;
