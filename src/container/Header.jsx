import { images } from '../constants';

const Header = () => {
  return (
    <div
      className='flex  flex-col items-center justify-center bg-white px-4 md:min-h-screen md:flex-row md:px-20'
      id='home'>
      <div className='items-flex-start mt-4 flex w-full flex-1 flex-col justify-center'>
        <div className='mb-4'>
          <p className=' font-base font-semibold uppercase tracking-wide text-black md:text-xl xl:text-3xl'>
            找到屬於你的咖啡
          </p>
          <img className='w-20' src={images.spoon} alt='spoon_image' />
        </div>
        <h1 className='lineHeight-110 font-base text-6xl uppercase tracking-wide text-golden '>匠人烘培，一生懸命</h1>
        <p className='font-alt mx-0 my-8 text-sm font-normal capitalize leading-7 tracking-wide text-black md:text-lg xl:text-2xl '>
          請坐下，讓我們分享咖啡的故事。咖啡豆的香氣，讓人心情愉悅。與朋友分享一杯咖啡，是生活中美好的時刻。
          {process.env.REACT_APP_TEST}
        </p>
        <button type='button' className='rounded bg-crimson px-6 py-2 font-base text-base font-semibold text-black'>
          Explore Menu
        </button>
      </div>
      <div className='flex w-full flex-1 items-center justify-center xl:ml-2'>
        <img className='w-full md:w-3/5 ' src={images.coffee02} alt='header_image' />
      </div>
    </div>
  );
};

export default Header;
