import { useState } from 'react';
import { ForecastDashboard, TodayDashboard } from '@/components';

const App = () => {
  const [city, setCity] = useState('tehran');

  return (
    <div className='mx-auto flex h-screen w-11/12 flex-col justify-between bg-white lg:flex-row xl:w-8/12'>
      <TodayDashboard />
      <ForecastDashboard />
    </div>
  );
};

export default App;
