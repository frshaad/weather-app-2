type Props = {};
const TodayCard = (props: Props) => {
  return (
    <div className='flex w-5/12 items-center justify-between rounded-lg bg-weakBlue p-4'>
      <div className='flex flex-col items-start justify-between'>
        <p>Wind</p>
        <p>Unhealthy</p>
        <p>12km/h</p>
      </div>
      <div>{/* Icon */}</div>
    </div>
  );
};
export default TodayCard;
