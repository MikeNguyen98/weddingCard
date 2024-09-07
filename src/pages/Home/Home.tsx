import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HTMLFlipBook from 'react-pageflip';
import './styles.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import Page from '@/components/Page';
import photos from './photo';
import { useMediaQuery } from 'usehooks-ts';

const targetDate = new Date('2024-09-21T17:00:00');

const Home = () => {
  const [index, setIndex] = useState(-1);
  const matches = useMediaQuery('(max-width: 768px)')
  console.log("🚀 ~ Home ~ matches:", matches)
  const [loading, setLoading] = useState(true);
  const firstTime = useRef<boolean>(true);
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));

      timeLeft = {
        months,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  const date = new Date('2024-09-21');
  const formatTime = (time: number) => (
    <span className='text-md md:"text-3xl font-bold'>
      {time < 10 ? `0${time}` : time}
    </span>
  );

  const pages = [
    {
      id: 'saveDate',
      img: '/saveDate.JPG',
      content: (
        <div className="w-full h-[500px] bg-slate-600 relative saveDate">
          <div className=" flex flex-col justify-center items-center w-full h-full text-white">
            <p
              style={{ fontFamily: 'Great Vibes' }}
              className="italic text-3xl"
            >
              Cường <span className="text-red-500">&hearts;</span> Hằng
            </p>
            <p>SAVE OUR DATE</p>
            <p>21.09.2024</p>
          </div>
        </div>
      ),
    },
    {
      id: 'aboutus',
      img: undefined,
      content: (
        <div className="w-full h-full">
          <p className="flex items-center justify-center text-center w-full px-2 text-xs md:text-base">
            "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi
            mà hai người cùng nhau xây dựng và phát triển."
          </p>
          <div className="flex flex-row justify-center items-center">
            <div className="h-full p-2 w-3/5 flex flex-col justify-center items-center md:w-[400px] md:h-[300px]">
              <p
                className="font-bold text-sm md:text-lg font-mono"
                data-aos="fade-right"
              >
                CHÚ RỂ
              </p>
              <p
                className="text-base italic md:text-2xl"
                style={{ fontFamily: 'Great Vibes' }}
                data-aos="fade-right"
              >
                Nguyễn Mạnh Cường
              </p>
              <p className="text-xs md:text-base" data-aos="fade-right">
                Anh - ...{' '}
              </p>
            </div>
            <div
              className="border border-1 w-2/5 h-[60vw] md:w-[200px] md:h-[300px]"
              style={{
                backgroundImage: "url('/Anh.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <div
              className="border border-1 w-2/5 h-[60vw] md:w-[200px] md:h-[300px]"
              style={{
                backgroundImage: "url('/Em.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="h-full p-2 w-3/5 flex flex-col justify-center items-center md:w-[400px] md:h-[300px]">
              <p className="font-bold text-sm md:text-lg" data-aos="fade-left">
                CÔ DÂU
              </p>
              <p
                className="text-base md:text-2xl italic"
                style={{ fontFamily: 'Great Vibes' }}
                data-aos="fade-left"
              >
                Phạm Thị Thu Hằng
              </p>
              <p className="text-xs md:text-base" data-aos="fade-left">
                Em - ...{' '}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[30px] h-[2px]" />
        </div>
      ),
    },
    {
      id: 'gallery',
      img: undefined,
      content: (
        <>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <p
              className="text-base md:text-2xl"
              style={{ fontFamily: 'Allura' }}
            >
              Thân mời
            </p>
            <p className="text-base md:text-2xl">
              ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH
            </p>
            <div className="h-[600px] w-full p-2 flex items-center justify-center rounded">
              <HTMLFlipBook
                width={390}
                height={600}
                className={'bg-white rounded'}
                style={{}}
                startPage={0}
                size={'fixed'}
                minWidth={0}
                maxWidth={428}
                minHeight={0}
                maxHeight={600}
                drawShadow={true}
                flippingTime={100}
                usePortrait={matches}
                startZIndex={0}
                autoSize={false}
                maxShadowOpacity={0}
                showCover={true}
                mobileScrollSupport={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={0}
                showPageCorners={true}
                disableFlipByClick={false}
              >
                <img src="/21.jpg" />
                <img src="/1.1.jpg" />
                <img src="/1.jpg" />
                <img src="/2.jpg" />
                <img src="/2.1.jpg" />
                <img src="/3.1.jpg" />
                <img src="/3.jpg" />
                <img src="/4.1.jpg" />
                <img src="/4.jpg" />
                <img src="/6.1.jpg" />
                <img src="/6.jpg" />
                <img src="/7.1.jpg" />
                <img src="/7.jpg" />
                <img src="/8.1.jpg" />
                <img src="/8.2.jpg" />
                <img src="/10.1.jpg" />
                <img src="/10.jpg" />
                <img src="/11.1.jpg" />
                <img src="/11.jpg" />
                <img src="/12.1.jpg" />
                <img src="/12.jpg" />
                <img src="/13.jpg" />
                <img src="/13.jpg" />
                <img src="/14.1.jpg" />
                <img src="/14.jpg" />
                <img src="/15.1.jpg" />
                <img src="/15.jpg" />
                <img src="/17.jpg" />
                <img src="/17.jpg" />
                <img src="/18.1.jpg" />
                <img src="/18.jpg" />
                <img src="/19.jpg" />
                <img src="/19.jpg" />
                <img src="/20.1.jpg" />
                <img src="/20.jpg" />
                <img src="/22.jpg" />
                <img src="/22.1.jpg" />
                <img src="/22.2.jpg" />
                <img src="/22.3.jpg" />
                <img src="/24.jpg" />
                <img src="/24.1.jpg" />
                <img src="/24.2.jpg" />
                <img src="/27.jpg" />
              </HTMLFlipBook>

              <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
              />
            </div>
            <div
              className="w-full sm:w-min h-full p-4 justify-center items-center "
              id="calendar"
            >
              <div
                className={
                  '!p-1 w-full bg-white !rounded-xl flex flex-col gap-2 justify-center items-center text-center border border-red-500'
                }
              >
                <p
                  style={{ fontFamily: 'Great Vibes' }}
                  className="border-b-2 border-b-red-500"
                >
                  Tháng 9
                </p>
                <Calendar
                  value={date}
                  defaultValue={date}
                  showNavigation={false}
                  className={'!border-none'}
                />
              </div>
            </div>
            <p className="text-base md:text-2xl flex w-full justify-center items-center text-center">
              TIỆC THÂN MẬT NHÀ GÁI ĐƯỢC TỔ CHỨC VÀO LÚC 17 GIỜ 00 PHÚT
            </p>
          </div>

          <div className="w-full grid grid-cols-3 divide-x-2">
            <div className="text-center">
              <p>THÁNG</p>
              <p className="text-base md:text-2xl">09</p>
            </div>
            <div className="text-center">
              <p>THỨ 7</p>
              <p className="text-lg md:text-3xl">21</p>
            </div>
            <div className="text-center text-base md:text-2xl">
              <p>NĂM</p>
              <p className="text-base md:text-2xl">2024</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <p>(Tức ngày 19 thngs 8 năm Giáp Thìn)</p>
            <p>TẠI NHÀ HÀNG TIỆC CƯỚI</p>
            <p>SALON 1 - 229 Tây Sơn, Đống Đa, Hà Nội</p>
            <a
              href="https://maps.app.goo.gl/Jmufx2bx3PhCqkbm6"
              target="_blank"
              className="flex gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="20"
                height="20"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <defs></defs>
                <g
                  stroke="none"
                  strokeWidth="0"
                  strokeDasharray="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  fill="none"
                  fillRule="nonzero"
                  opacity="1"
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 45 90 c -1.062 0 -2.043 -0.561 -2.583 -1.475 l -4.471 -7.563 c -9.222 -15.591 -17.933 -30.317 -20.893 -36.258 c -2.086 -4.277 -3.138 -8.852 -3.138 -13.62 C 13.916 13.944 27.86 0 45 0 c 17.141 0 31.085 13.944 31.085 31.084 c 0 4.764 -1.051 9.339 -3.124 13.596 c -0.021 0.042 -0.042 0.083 -0.063 0.124 c -3.007 6.005 -11.672 20.654 -20.843 36.159 l -4.472 7.563 C 47.044 89.439 46.062 90 45 90 z M 45 6 C 31.168 6 19.916 17.253 19.916 31.084 c 0 3.848 0.847 7.539 2.518 10.969 c 2.852 5.721 11.909 21.033 20.667 35.839 L 45 81.104 l 1.89 -3.196 c 8.763 -14.813 17.823 -30.131 20.687 -35.879 c 0.012 -0.022 0.023 -0.045 0.035 -0.067 c 1.642 -3.406 2.474 -7.065 2.474 -10.877 C 70.085 17.253 58.832 6 45 6 z"
                    stroke="none"
                    strokeWidth="1"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fill="rgb(0,0,0)"
                    fillRule="nonzero"
                    opacity="1"
                    transform=" matrix(1 0 0 1 0 0) "
                    // strokeLinecap="round"
                  />
                  <path
                    d="M 45 44.597 c -8.076 0 -14.646 -6.57 -14.646 -14.646 S 36.924 15.306 45 15.306 c 8.075 0 14.646 6.57 14.646 14.646 S 53.075 44.597 45 44.597 z M 45 21.306 c -4.767 0 -8.646 3.878 -8.646 8.646 s 3.878 8.646 8.646 8.646 c 4.768 0 8.646 -3.878 8.646 -8.646 S 49.768 21.306 45 21.306 z"
                    stroke="none"
                    strokeWidth="1"
                    strokeDasharray="none"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fill="rgb(0,0,0)"
                    fillRule="nonzero"
                    opacity="1"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              CHỈ DƯỜNG
            </a>
          </div>
          <div className="flex gap-2 text-center w-full justify-center items-center">
            <fieldset className="border-2 rounded-lg flex justify-center items-center">
              <legend
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  padding: '0.5rem',
                }}
              >
                Timer
              </legend>
              {timeLeft?.months > 0 && (
                <>
                  <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col justify-center items-center">
                    {formatTime(timeLeft?.months || 0)}
                    <span>Tháng</span>
                  </div>{' '}
                  :
                </>
              )}
              <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col justify-center items-center">
                {formatTime(timeLeft?.days || 0)}
                <span>Ngày</span>
              </div>{' '}
              :
              <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col justify-center items-center">
                {formatTime(timeLeft?.hours || 0)}
                <span>Giờ</span>
              </div>{' '}
              :
              <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col justify-center items-center">
                {formatTime(timeLeft?.minutes || 0)}
                <span>Phút</span>
              </div>{' '}
              :
              <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col justify-center items-center">
                {formatTime(timeLeft?.seconds || 0)}
                <span>Giây</span>
              </div>
            </fieldset>
          </div>
        </>
      ),
    },
    {
      id: 'thankyou',
      img: undefined,
      content: (
        <div className="w-auto h-screen content-center text-center bg-white relative">
          <img
            src="/thankyou.jpg"
            alt="thankyou"
            className="w-full h-full object-cover"
          />
          <p
            className="text-[32px] md:text-[60px] lg:text-[120px] font-medium text-white absolute left-1/2 transform -translate-x-1/2 md:translate-y-0 -translate-y-1/2 top-[20%]"
            style={{ fontFamily: 'Great Vibes' }}
          >
            Thank you
          </p>
        </div>
      ),
    },
  ];
  const handleScroll = () => {
    const element = document.getElementById('calendar');
    if (element && firstTime.current) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        // Notify when the element is in the viewport
        firstTime.current = false;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full overflow-y-auto overflow-x-hidden flex-col gap-4 bg-orange-50 font-mono">
      <link
        href="https://fonts.googleapis.com/css?family=Great Vibes"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Allura"
        rel="stylesheet"
      />

      {pages.map((page, index) => (
        <Page
          setLoading={setLoading}
          key={index}
          index={index}
          page={page}
        ></Page>
      ))}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            {/* back to top */}
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="!fixed bottom-5 end-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
              id="btn-back-to-top"
            >
              <span className="[&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </span>
            </button>
            {/* modal */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
      <audio id="audio" loop autoPlay={true}>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Home;
