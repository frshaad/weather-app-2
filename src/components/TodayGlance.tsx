type Props = {};
const TodayGlance = (props: Props) => {
  return (
    <article className='mt-5 flex w-full items-center justify-between rounded-lg bg-normalBlue'>
      {/* info */}
      <div className='flex flex-col items-center justify-between p-4 text-strongBlue'>
        <div className='flex items-center justify-between'>
          <p>Gotham</p>
          <p>Today 00:32 PM</p>
        </div>
        <div className='text-center'>
          <h3>
            14<sup>o</sup>
          </h3>
          <p>Mostly Clear</p>
        </div>
        <div className='flex items-center justify-between'>
          <p>720hpa</p>
          <p>32%</p>
          <p>12km/h</p>
        </div>
      </div>

      {/* chart */}
      <div></div>
    </article>
  );
};
export default TodayGlance;
