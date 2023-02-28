import { WiDegrees } from 'react-icons/wi';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';
import { BsSunrise, BsSunset } from 'react-icons/bs';

type Props = {};
const TodayGlance = (props: Props) => {
  return (
    <article className='mt-5 w-full items-center justify-between rounded-xl bg-normalBlue lg:flex'>
      {/* info */}
      <div className='flex flex-col items-center justify-between p-8 text-strongBlue'>
        <div className='flex w-full items-center justify-between'>
          <p className='text-2xl font-bold'>
            London <span className='font-light'>GB</span>
          </p>
          <p className='text-base font-normal'>Today 00:32 PM</p>
        </div>
        <div className='mt-8 text-center'>
          <h3 className='relative text-7xl font-medium'>
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
          <div className='mt-1 flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <BsThermometerHigh size={18} />
              <span>
                <span className='font-medium'>15</span>
                <sup>o</sup>
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <BsThermometerLow size={18} />
              <span>
                <span className='font-medium'>9</span>
                <sup>o</sup>
              </span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <BsSunset size={20} /> <span>17:35</span>
          </div>
        </div>
      </div>

      {/* chart */}
      <div></div>
    </article>
  );
};
export default TodayGlance;
