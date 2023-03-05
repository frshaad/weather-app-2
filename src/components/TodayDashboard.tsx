import { Searchbar, TodayCards, TodayGlance } from '@/components'

type Props = {}
const TodayDashboard = (props: Props) => {
  return (
    <section className='mx-auto w-full max-w-xl py-10 md:py-14 lg:w-2/3 lg:max-w-full lg:px-5 '>
      <Searchbar />
      <TodayGlance />
      <TodayCards />
    </section>
  )
}
export default TodayDashboard
