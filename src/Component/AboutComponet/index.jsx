import React from 'react';
import location from '../../assets/images/location.png'; 
import relationship from '../../assets/images/relationship.png'; 
import work from '../../assets/images/work.png'; 
import shape from '../../assets/images/Shape.png';
import profileDate from '../../assets/images/profileDate.png'; 


const AboutComponent = () => {
    return (
        <div class="shadow-fb rounded w-full bg-white p-4">
          <div class="text-xl font-bold text-fBlack">About</div>
          <div class="mt-4 flex items-center">
            <img
            src={location}
            class="h-5 w-5 "
            alt="profile"
          />
            <span class="ml-2">
            Yogyakarta, ID
            </span>
          </div>
          <div class="mt-4 flex items-center">
          <img
            src={relationship}
            class="h-5 w-5 "
            alt="profile"
          />
            <span class="ml-2">Single</span>
          </div>
          <div class="mt-4 flex items-center">
          <img
            src={profileDate}
            class="h-5 w-5 "
            alt="profile"
          />
            <span class="ml-2">Joined June 2012 </span>
          </div>
          <div class="mt-4 flex items-center">
          <img
            src={shape}
            class="h-5 w-5 "
            alt="profile"
          />
            <span class="ml-2">
            dribble.com/fawait
            </span>
          </div>
          <div class="mt-4 flex items-center">
          <img
            src={work}
            class="h-5 w-5 "
            alt="profile"
          />
            <span class="ml-2">
            Working at Sebo Studio
            </span>
          </div>
        
        </div>
      );
};

export default AboutComponent;
