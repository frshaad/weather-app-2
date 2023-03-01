import { TodayGlance, TodayCards, Searchbar } from '@/components';
import { useCurrentWeather } from '@/hooks';

type Props = {};
const TodayDashboard = (props: Props) => {
  useCurrentWeather();

  return (
    <section className='mx-auto w-full py-10 px-5 md:w-2/3 '>
      <Searchbar />
      <TodayGlance />
      <TodayCards />
    </section>
  );
};
export default TodayDashboard;
