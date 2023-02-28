import { TodayCard } from '@/components';
import { FiWind } from 'react-icons/fi';
import { BsCloudRain, BsClouds, BsSun, BsThermometerSun } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';

type Props = {};
const TodayCards = (props: Props) => {
  return (
    <article className='mt-5 flex w-full flex-col items-center justify-between gap-5'>
      <div className='flex w-full items-center justify-between gap-5'>
        <TodayCard
          title='wind'
          icon={<FiWind />}
          value='12 km/h'
          description='Unhealthy'
        />
        <TodayCard
          title='precipitation'
          icon={<BsCloudRain />}
          value='2 mm'
          description='shower rain'
        />
      </div>
      <div className='flex w-full items-center justify-between gap-5'>
        <TodayCard
          title='humidity'
          icon={<IoWaterOutline />}
          value='60%'
          description='Unhealthy'
        />
        <TodayCard
          title='cloud cover'
          icon={<BsClouds />}
          value='40%'
          description='Unhealthy'
        />
      </div>
      <div className='flex w-full items-center justify-between gap-5'>
        <TodayCard
          title='feels like'
          icon={<BsThermometerSun />}
          value='13'
          description='feels colder'
        />
        <TodayCard
          title='UV index'
          icon={<BsSun />}
          value='8'
          description='Unhealthy'
        />
      </div>
    </article>
  );
};
export default TodayCards;
