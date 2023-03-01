type Props = {
  time: string;
  icon: JSX.Element;
  temp: number;
  first?: boolean;
};
const HourlyForecast = ({ time, icon, temp, first }: Props) => {
  return (
    <div
      className={`flex flex-col items-center  gap-3 rounded-lg py-3 px-6 ${
        first ? 'bg-normalBlue' : ''
      }`}
    >
      <p className='text-xs font-medium uppercase'>{time}</p>
      {/* <img src='' alt='' /> */}
      {icon}
      <p>
        {temp}
        <sup>o</sup>
      </p>
    </div>
  );
};
export default HourlyForecast;
