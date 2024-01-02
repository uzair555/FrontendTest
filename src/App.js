import logo from './logo.svg';
import './App.css';
import ProfilePage from './Component/ProfilePage';
import Navbar from './Component/Navbar';
import CoverImage from './Component/CoverImage';
import AboutComponent from './Component/AboutComponet';
import PhotosComponent from './Component/PhotosComponent';
import AddPost from './Component/AddPost';

function App() {
  return (
    <div class="antialiased">
        <Navbar />
        <CoverImage/>
        <div class="px-52 grid grid-cols-12 pt-4 gap-4 bg-fFill z-0 pb-56">
        <div class="col-span-5 col-start-1 row-start-1 space-y-4">
          <AboutComponent />
          <PhotosComponent />
        </div>
        <div class="flex-row row-start-1 col-span-7 col-start-6 space-y-4">
          <AddPost />
          {/* <Posts />
          <MainPost />
          <MainPost /> */}
        </div>
      </div>
        </div>
  );
}

export default App;
