import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Spinner from './components/Spinner';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
