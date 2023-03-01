import { WeekDayForecast } from '@/components';
import { BsThermometerSun } from 'react-icons/bs';

type Props = {};
const WeekForecast = (props: Props) => {
  return (
    <article className='mt-5 flex w-full flex-col gap-6 overflow-scroll'>
      <WeekDayForecast
        date='12 Apr'
        weekDay='tommorow'
        temp={16}
        icon={<BsThermometerSun size={30} />}
      />
      <WeekDayForecast
        date='13 Apr'
        weekDay='monday'
        temp={18}
        icon={<BsThermometerSun size={30} />}
      />
      <WeekDayForecast
        date='14 Apr'
        weekDay='tuesday'
        temp={15}
        icon={<BsThermometerSun size={30} />}
      />
      <WeekDayForecast
        date='15 Apr'
        weekDay='wednesday'
        temp={19}
        icon={<BsThermometerSun size={30} />}
      />
      <WeekDayForecast
        date='15 Apr'
        weekDay='wednesday'
        temp={19}
        icon={<BsThermometerSun size={30} />}
      />
      <WeekDayForecast
        date='15 Apr'
        weekDay='wednesday'
        temp={19}
        icon={<BsThermometerSun size={30} />}
      />
      <WeekDayForecast
        date='15 Apr'
        weekDay='wednesday'
        temp={19}
        icon={<BsThermometerSun size={30} />}
      />
    </article>
  );
};
export default WeekForecast;
