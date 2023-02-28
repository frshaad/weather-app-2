import { TodayGlance, TodayCards, Searchbar } from '@/components';

type Props = {};
const TodayDashboard = (props: Props) => {
  return (
    <section className='w-2/3 p-10'>
      <Searchbar />
      <TodayGlance />
      <TodayCards />
    </section>
  );
};
export default TodayDashboard;
