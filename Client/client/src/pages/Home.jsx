import React from 'react';
import imageText from "../assets/image-text.svg"
import FavouriteList from "../pages/FavouriteList"
import BurgerList from './BurgerList';



const Home = () => {
  return (
    <main>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://res.cloudinary.com/dbxu1ctiz/image/upload/v1741087134/Frame_1171276711_ugkfjw.svg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <img src={imageText} alt="image-text" />
  </div>
</div>
<FavouriteList/>
<BurgerList/>

    </main>
  );
};

export default Home;

