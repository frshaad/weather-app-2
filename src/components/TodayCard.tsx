type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  value: string;
};

const TodayCard = ({ description, icon, title, value }: Props) => {
  return (
    <div className='flex w-full items-center justify-between rounded-xl bg-weakBlue p-5'>
      <div className='flex flex-col items-start justify-between'>
        <div className='flex items-center gap-2'>
          {icon}
          <p className='text-base font-medium capitalize text-black'>{title}</p>
        </div>
        <p className='mt-3 text-sm font-light capitalize text-gray'>
          {description}
        </p>
        <p className='mt-3'>{value}</p>
      </div>
      <div>{/* Icon */}</div>
    </div>
  );
};
export default TodayCard;
