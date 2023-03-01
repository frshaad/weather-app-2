type Props = {
  weekDay: string;
  date: string;
  temp: number;
  icon: JSX.Element;
};
const WeekDayForecast = ({ weekDay, date, temp, icon }: Props) => {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex w-1/3 flex-col items-start justify-between gap-1'>
        <p className='font-medium capitalize text-black'>{weekDay}</p>
        <p className='text-gray'>{date}</p>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-xl font-medium'>
          {temp}
          <sup>o</sup>
        </p>
      </div>
      <div className='flex items-center justify-center'>{icon}</div>
    </div>
  );
};
export default WeekDayForecast;
