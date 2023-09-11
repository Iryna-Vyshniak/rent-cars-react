import { Car } from '../assets/images';

import MainTitle from './MainTitle';
import ThumbImage from './ThumbImage';

const NotFound = () => {
  return (
    <section className="no-scrollbar relative flex flex-col items-center justify-start overflow-hidden">
      <MainTitle
        className="responsive-font relative z-[50] mt-0
        flex
        items-start
        justify-center
        bg-gradient-to-r
        from-blue-300
        via-slate-300
        to-stone-500 bg-clip-text text-center text-transparent drop-shadow-[0_1px_3px_rgba(250,250,250,1)]"
      >
        No followed cars
      </MainTitle>
      <ThumbImage
        src={Car}
        alt="Car"
        width="1200"
        className="absolute bottom-0 right-0 z-[60] mx-4"
      />
    </section>
  );
};

export default NotFound;
