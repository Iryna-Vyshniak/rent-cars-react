import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';

const App = () => {
  return (
    <BrowserRouter basename="/rent-cars-react">
      <UserRoutes />
    </BrowserRouter>
  );
};

export default App;
