import Banner from '../components/HomeSections/Banner';
import Cars from '../components/HomeSections/Cars';
import Destinations from '../components/HomeSections/Destination';
import Hero from '../components/HomeSections/Hero';
import ImageSlider from '../components/HomeSections/ImageSlider';
import Offers from '../components/HomeSections/Offers';

import RentService from '../components/HomeSections/RentService';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hero />
      <Banner />
      <Destinations />
      <Offers />
      <RentService />
      <Cars />
      <ImageSlider />
    </div>
  );
};

export default HomePage;
