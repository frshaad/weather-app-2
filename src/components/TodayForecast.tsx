import { HourlyForecast } from '@/components';
import { BsArrowRight, BsThermometerSun } from 'react-icons/bs';

type Props = {};
const TodayForecast = (props: Props) => {
  return (
    <article className='mt-8'>
      <div className='flex items-center justify-between pr-5'>
        <p className='text-lg'>Today</p>
        <BsArrowRight size={20} />
      </div>
      <div className='scrollbar-hide mt-3 flex items-center justify-start gap-1 overflow-scroll first:bg-normalBlue'>
        <HourlyForecast
          time='now'
          temp={24}
          icon={<BsThermometerSun />}
          first
        />
        <HourlyForecast time='01pm' temp={22} icon={<BsThermometerSun />} />
        <HourlyForecast time='02pm' temp={25} icon={<BsThermometerSun />} />
        <HourlyForecast time='03pm' temp={18} icon={<BsThermometerSun />} />
        <HourlyForecast time='04pm' temp={17} icon={<BsThermometerSun />} />
        <HourlyForecast time='05pm' temp={15} icon={<BsThermometerSun />} />
        <HourlyForecast time='06pm' temp={21} icon={<BsThermometerSun />} />
      </div>
    </article>
  );
};
export default TodayForecast;
