import Sidebar from '../components/Sidebar/Sidebar';

const FavoritesPage = () => {
  return (
    <div className="fav-bg flex min-h-screen dark:bg-slate-800">
      <div className="relative z-10 mx-auto my-0 flex items-center justify-center overflow-hidden bg-white/80">
        <Sidebar />
      </div>
    </div>
  );
};

export default FavoritesPage;
