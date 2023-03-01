import { BiSearch } from 'react-icons/bi';
import { TbCurrentLocation } from 'react-icons/tb';
import { useGeolocated } from 'react-geolocated';

type Props = {};
const Searchbar = (props: Props) => {
  const handleMyLocation = () => {};
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  if (coords) {
  }

  return (
    <article className='max-w-5/6 mx-auto flex w-5/6 items-center justify-between gap-1 md:w-96'>
      <div className='flex items-center'>
        <label htmlFor='search-box'>
          <BiSearch className='h-5 w-5 cursor-pointer text-strongBlue' />
        </label>
        <input
          id='search-box'
          type='text'
          placeholder='Search locations here...'
          className='px-2 py-1 text-lg font-medium text-strongBlue outline-none placeholder:text-base placeholder:font-normal placeholder:text-strongBlue/40'
        />
      </div>
      <button
        onClick={handleMyLocation}
        className='transition hover:scale-105 active:scale-95'
      >
        <TbCurrentLocation className='text-strongBlue' size={20} />
      </button>
    </article>
  );
};
export default Searchbar;
