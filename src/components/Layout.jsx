import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Container from './Container';
import Header from './Header/Header';
import Spinner from './Spinner';

const Layout = () => {
  return (
    <div className="relative flex flex-auto min-h-screen flex-col items-center justify-center">
      <Header />
      <main className="mob:mt-[140px] mt-11 w-full flex-auto">
        <Container className="padding">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
