import { TodayCard } from '@/components';

type Props = {};
const TodayCards = (props: Props) => {
  return (
    <article className='mt-5 flex w-full flex-col items-center justify-between'>
      <div className='flex w-full items-center justify-between'>
        <TodayCard />
        <TodayCard />
      </div>
      <div className='flex w-full items-center justify-between'>
        <TodayCard />
        <TodayCard />
      </div>
    </article>
  );
};
export default TodayCards;
