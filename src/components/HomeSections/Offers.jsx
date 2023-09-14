import Container from '../Container';

const Offers = () => {
  return (
    <section className="px-4">
      <Container className="m-auto flex max-w-[1440px] flex-wrap justify-between gap-4">
        {' '}
        <p className="rounded-lg  p-2 text-lg font-bold text-main-text dark:text-white">
          Competitive Rates
        </p>
        <p className="rounded-lg  p-2 text-lg font-bold text-main-text dark:text-white">
          Ride in Style
        </p>
        <p className="rounded-lg  p-2 text-lg font-bold text-main-text dark:text-white">
          Car Rental Excellence
        </p>
        <p className="rounded-lg  p-2 text-lg font-bold text-main-text dark:text-white">
          Adventure Awaits
        </p>
      </Container>
    </section>
  );
};

export default Offers;
