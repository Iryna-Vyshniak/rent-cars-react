import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <UserRoutes />
    </BrowserRouter>
  );
};

export default App;
