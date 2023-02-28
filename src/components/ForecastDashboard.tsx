import { TodayForecast, WeekForecast } from '@/components';

type Props = {};
const ForecastDashboard = (props: Props) => {
  return (
    <section className='w-1/3'>
      <TodayForecast />
      <WeekForecast />
    </section>
  );
};
export default ForecastDashboard;
