import spinner from '../assets/spinner.svg';

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-backdrops-bg">
      <div>
        <img src={spinner} alt="Loading..." className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
