import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./Component/ProfilePage";
import Navbar from "./Component/Navbar";
import CoverImage from "./Component/CoverImage";
import AboutComponent from "./Component/AboutComponet";
import PhotosComponent from "./Component/PhotosComponent";
import AddPost from "./Component/AddPost";
import Posts from "./Component/Posts";
const t1 =
  "One of the perks of working in an international company is sharing knowledge with your colleagues.";
const t2 = "Peace On Earth A Wonderful Wish But No Way";
function App() {
  return (
    <div class="antialiased bg-fFill">
      <Navbar />
      <CoverImage />
      <div class="px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56">
        <div class="col-span-5 col-start-1 row-start-1 space-y-4">
          <AboutComponent />
          <PhotosComponent />
        </div>
        <div class="flex-row row-start-1 col-span-7 col-start-6 space-y-4">
          <AddPost />
          <Posts title={t2} img={false} />
          <Posts title={t1} img={true} />
          <div class="flex space-x-4 pt-4">
            <span class="text-fGrey">Contact Us</span>
            <span class="text-fGrey">Terms of use</span>
            <span class="text-fGrey">Cookies Policy</span>
            <span class="text-fGrey">Help & Support </span>
          </div>
          <div class="border border-fGray border-opacity-10 mt-4" />

          <div class="flex space-x-4 pt-4 pb-4">
            <span class="text-fGrey">Facebook</span>
            <span class="text-fGrey">Linkedin</span>
            <span class="text-fGrey">Instagram</span>
            <span class="text-fGrey">Youtube </span>
          </div>
          <div class="border border-fGray border-opacity-10 mt-4" />

          <div class="flex w-full justify-between pt-4 pb-4">
            <div>
              <span class="text-fGrey">
                Halal Networks © 2023. All rights reserved
              </span>
            </div>
            <div>
              <span class="text-fGrey pr-4">User Agreement</span>
              <span class="text-fGrey">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
