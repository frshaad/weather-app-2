import { ForecastDashboard, TodayDashboard } from '@/components';

const App = () => {
  return (
    <div className='flex h-screen w-full justify-between bg-white'>
      <TodayDashboard />
      <ForecastDashboard />
    </div>
  );
};

export default App;
