import { Link } from 'react-router-dom';

import MainTitle from '../components/MainTitle';

const PageNotFound = () => {
  return (
    <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-montserrat text-8xl font-semibold text-accent-color">404</p>
        <MainTitle className="sm:text-4xl mt-4 text-3xl font-bold tracking-tight text-main-text">
          Page not found
        </MainTitle>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="px-3.5 py-2.5 bg-accent-color hover:bg-hover-color focus:bg-hover-color rounded-md text-sm font-semibold text-btn-text shadow-sm"
          >
            Go back home
          </Link>
          <Link to="/#contacts" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
