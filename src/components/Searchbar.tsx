import { BiSearch } from 'react-icons/bi';

type Props = {};
const Searchbar = (props: Props) => {
  return (
    <article className='flex w-full items-center gap-1'>
      <BiSearch className='h-5 w-5' />
      <input
        type='text'
        placeholder='Search locations here...'
        className='font-primary px-2 py-1 outline-none'
      />
    </article>
  );
};
export default Searchbar;
