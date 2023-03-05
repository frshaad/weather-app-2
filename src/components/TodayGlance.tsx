import {
  BsSunrise,
  BsSunset,
  BsThermometerHigh,
  BsThermometerLow,
} from 'react-icons/bs';
import { WiDegrees } from 'react-icons/wi';

type Props = {};
const TodayGlance = (props: Props) => {
  return (
    <article className='mt-5 w-full items-center justify-between rounded-xl bg-normalBlue p-5 drop-shadow-md lg:flex'>
      {/* info */}
      <div className='flex flex-col items-center justify-between text-strongBlue lg:w-1/2 lg:p-2'>
        <div className='flex w-full items-center justify-between'>
          <p className='text-2xl font-bold lg:text-lg'>
            London <span className='font-light'>GB</span>
          </p>
          <p className='text-base font-normal lg:text-sm'>Today 00:32 PM</p>
        </div>
        <div className='mt-8 text-center'>
          <h3 className='relative text-8xl font-medium'>
            <span>14</span>
            <span className='absolute -right-16 -top-6'>
              <WiDegrees size={120} />
            </span>
          </h3>
          <p className='mt-3'>Mostly Clear</p>
        </div>

        <div className='mt-8 flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <BsSunrise size={20} /> <span>06:24</span>
          </div>
          <div className='mt-1 flex items-center gap-3'>
            <div className='flex items-center'>
              <BsThermometerLow size={18} />
              <span>
                <span className='font-medium'>9</span>
                <sup>o</sup>
              </span>
            </div>
            <div className='flex items-center'>
              <span>
                <span className='font-medium'>15</span>
                <sup>o</sup>
              </span>
              <BsThermometerHigh size={18} />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <BsSunset size={20} /> <span>17:35</span>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className='xl:w-1/2 xl:p-2'></div>
    </article>
  );
};
export default TodayGlance;
