import { TodayForecast, WeekForecast } from '@/components';

type Props = {};
const ForecastDashboard = (props: Props) => {
  return (
    <section className='mx-auto w-11/12 py-10 px-5 md:w-2/3 lg:w-1/3'>
      <div>
        <h2 className='text-center text-2xl font-normal'>Forecast</h2>
      </div>
      <TodayForecast />
      <WeekForecast />
    </section>
  );
};
export default ForecastDashboard;
