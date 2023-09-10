import { Link } from 'react-router-dom';

import { HeroPoster } from '../../assets/images';

const Hero = () => {
  return (
    <section className="relative mt-[-4rem] flex h-screen w-screen flex-col wide:-mt-60">
      <img
        className="absolute left-0 top-0 h-screen w-full object-cover object-bottom"
        src={HeroPoster}
        alt="/"
      />
      <div className="absolute left-0 top-0 h-screen w-full bg-black/30" />
      <div className="absolute left-0 top-[8rem] flex h-full w-full max-w-[1140px] flex-col items-start justify-start p-5 text-white md:left-[10%]">
        <p>All Inclusive</p>
        <h1 className="responsive-font  mb-6 font-bold drop-shadow-2xl md:text-8xl">
          Your Key to <span className="gradient">Freedom</span> on Ukrainian Roads
        </h1>
        <p className="mb-4 max-w-[600px] py-2 text-[1.5rem] drop-shadow-2xl">
          Experience the freedom of exploring Ukraine at your own pace with our car rental app.
          Discover picturesque landscapes, vibrant cities, and hidden gems with ease. Your adventure
          begins here.
        </p>
        <Link to="/catalog" className="small-button cursor-pointer px-2 text-center">
          Reserve Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
