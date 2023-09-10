import Container from '../Container';

const Offers = () => {
  return (
    <section>
      <Container className="m-auto flex max-w-[1440px] flex-wrap justify-between gap-4">
        {' '}
        <p className="text-lg font-bold text-main-text dark:text-white">Competitive Rates</p>
        <p className="text-lg font-bold text-main-text dark:text-white">Ride in Style</p>
        <p className="text-lg font-bold text-main-text dark:text-white">Car Rental Excellence</p>
        <p className="text-lg font-bold text-main-text dark:text-white">Adventure Awaits</p>
      </Container>
    </section>
  );
};

export default Offers;
