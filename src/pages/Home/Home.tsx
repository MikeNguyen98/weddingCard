import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Calendar from 'react-calendar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
const targetDate = new Date('2024-09-21T17:00:00');
const Home = () => {
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

  return (
    <div className="flex w-full overflow-y-auto overflow-x-hidden flex-col gap-4 bg-orange-50 font-mono pb-2">
      <link
        href="https://fonts.googleapis.com/css?family=Great Vibes"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Allura"
        rel="stylesheet"
      />
      <div className="w-full h-[500px] bg-slate-600 relative">
        <div className="absolute flex flex-col justify-center items-center w-full h-full text-white">
          <p style={{ fontFamily: 'Great Vibes' }} className="italic text-3xl">
            Cường <span className="text-red-500">&hearts;</span> Hằng
          </p>
          <p>SAVE OUR DATE</p>
          <p>21.09.2024</p>
        </div>
      </div>
      <p className="flex items-center justify-center text-center w-full px-2 text-xs md:text-base">
        "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà
        hai người cùng nhau xây dựng và phát triển."
      </p>
      <div className="flex flex-row justify-center items-center">
        <div className="border border-1 w-2/5 h-[60vw] md:w-[200px] md:h-[300px]"></div>
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
        <div className="border border-1 w-2/5 h-[60vw] md:w-[200px] md:h-[300px]"></div>
      </div>
      <div className="flex justify-center items-center w-[30px] h-[2px]" />
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-base md:text-2xl" style={{ fontFamily: 'Allura' }}>
          Thân mời
        </p>
        <p className="text-base md:text-2xl">ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH</p>
        <div className="w-[120vw] md:w-full p-2 h-[200px] md:w-3/4 md:h-[300px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={8}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="w-full h-full flex justify-center items-center"
          >
            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 1
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 2
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 3
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 4
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 5
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 6
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 7
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 8
            </SwiperSlide>

            <SwiperSlide className="w-full flex justify-center items-center text-center">
              Slide 9
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full sm:w-min h-full p-4 justify-center items-center ">
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
                stroke-linecap="round"
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
          {timeLeft?.months && (
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
      <div className="w-full h-[200px] md:h-[500px] content-center text-center bg-white">
        <p
          className="text-2xl md:text-3xl"
          style={{ fontFamily: 'Great Vibes' }}
        >
          Thank you
        </p>
      </div>
    </div>
  );
};

export default Home;
