import Sidebar from "./sidebar";
import Header from "./header";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = () => {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          {/* {children} */}
        </main>
      </div>
      <p>This IS dashboard</p>
    </div>
  );
};

export default DashboardLayout;
