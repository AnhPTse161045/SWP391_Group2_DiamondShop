import DashboardLayout from '../components/DashboardLayout';

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-darker">
        <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          This is a sample admin dashboard built with Next.js and Tailwind CSS.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Home;
