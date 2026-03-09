import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-primary dark:bg-primary-light">
      <Sidebar />
      <main className="flex-1 ml-72 min-h-screen bg-primary dark:bg-primary-light">
        <div className="container mx-auto px-8 py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;