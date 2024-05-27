import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Assuming Chart.js is installed

interface ChartData {
  // Define the structure of your chart data here (labels, datasets, etc.)
}

const Dashboard: React.FC = () => {
  const barChartRef = useRef<HTMLCanvasElement>(null);
  const doughnutChartRef = useRef<HTMLCanvasElement>(null);

  // Replace with your actual data fetching logic (e.g., API call)
  const [barChartData, setBarChartData] = React.useState<ChartData>(null);
  const [doughnutChartData, setDoughnutChartData] = React.useState<ChartData>(null);

  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      // Replace with your actual data fetching logic
      const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
      const data = await response.json();
      setBarChartData(data); // Update state with fetched data for bar chart
      setDoughnutChartData(data); // Update state with fetched data for doughnut chart
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (barChartData && barChartRef.current) {
      const ctx = barChartRef.current.getContext('2d');
      if (ctx) {
        // Create bar chart using Chart.js
        new Chart(ctx, {
          type: 'bar',
          data: barChartData,
          // Add your chart configuration options here
        });
      }
    }
  }, [barChartData]);

  useEffect(() => {
    if (doughnutChartData && doughnutChartRef.current) {
      const ctx = doughnutChartRef.current.getContext('2d');
      if (ctx) {
        // Create doughnut chart using Chart.js
        new Chart(ctx, {
          type: 'doughnut',
          data: doughnutChartData,
          // Add your chart configuration options here
        });
      }
    }
  }, [doughnutChartData]);

  return (
    <div>
      {/* Other content in your dashboard */}
      {/* Chart Section */}
      <div className="relative p-4 h-72">
        <canvas id="barChart" ref={barChartRef} />
      </div>

      <div className="bg-white rounded-md dark:bg-darker" x-data="{ isOn: false }">
        {/* Card header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-primary">
          <h4 className="text-lg font-semibold text-gray-500 dark:text-light">Doughnut Chart</h4>
          <div className="flex items-center">
            <button
              className="relative focus:outline-none"
              x-cloak
              @click="isOn = !isOn"// No need for $parent here, modify toggle logic if needed
            >
              <div className="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-darker"></div>
              <div
                className="absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform scale-110 rounded-full shadow-sm"
                :class="{ 'translate-x-0 bg-white dark:bg-primary-100': !isOn, 'translate-x-6 bg-primary-light dark:bg-primary': isOn }"
              ></div>
            </button>
          </div>
        </div>
        {/* Chart */}
        <div className="relative p-4 h-72">
          <canvas id="doughnutChart" ref={doughnutChartRef} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
