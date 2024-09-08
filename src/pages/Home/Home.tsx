import {
  Button,
  FloatButton,
  Form,
  FormProps,
  Input,
  Modal,
  Select,
  Tabs,
} from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HTMLFlipBook from 'react-pageflip';
import './styles.css';

import { addDoc, collection } from 'firebase/firestore';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import Page from '@/components/Page';
import { db } from '@/services/firebase';
import { useMediaQuery } from 'usehooks-ts';
import photos from './photo';

const targetDate = new Date('2024-09-21T17:00:00');

const Home = () => {
  const [index, setIndex] = useState(-1);
  const matches = useMediaQuery('(max-width: 768px)');
  const [loading, setLoading] = useState(true);
  const isSubmit = localStorage.getItem('isSubmit');
  const firstTime = useRef<boolean>(true);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalQROpen, setIsModalQROpen] = useState(false);

  const onFinish: FormProps<any>['onFinish'] = async (values) => {
    const newData = {
      name: values.name ?? '',
      phone: values.phone ?? '',
      message: values.message ?? '',
      attendance: values.attendance ?? 'yes',
    };

    try {
      await addDoc(collection(db, 'response'), newData);
      setIsModalOpen(false);
      localStorage.setItem('isSubmit', 'true');
    } catch (err) {
      console.log('🚀 ~ Home ~ err:', err);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <div className=" flex flex-col justify-center items-center w-full h-full text-white pt-28">
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
        <div className="w-full h-full flex flex-col gap-4">
          <p className="flex items-center justify-center text-center w-full px-6 text-xs md:text-base">
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
                {/* Anh - ...{' '} */}
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
                {/* Em - ...{' '} */}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[30px] h-[2px]" />
        </div>
      ),
    },
    {
      id: 'invited',
      img: undefined,
      content: (
        <>
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <p
              className="text-2xl md:text-3xl"
              style={{ fontFamily: 'Allura' }}
            >
              Thân mời
            </p>
            <p className="text-base md:text-2xl">
              ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH
            </p>
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
              TIỆC THÂN MẬT NHÀ GÁI ĐƯỢC TỔ CHỨC VÀO LÚC <br /> 17 GIỜ 00 PHÚT
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
            <p>(Tức ngày 19 tháng 8 năm Giáp Thìn)</p>
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
            <div className="w-[200px] h-[200px] rounded">
              <img src="/map.png" alt="map" />
            </div>
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
                Đếm ngược
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
      id: 'daidien',
      img: undefined,
      content: (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="font-bold">Đại Diện Gia Đình</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="font-bold">Nhà trai</p>
              <div className="flex flex-col items-start">
                <p>Ông Nguyễn Quốc Hùng</p>
                <p>Bà Trần Thị Thu Hằng</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <p className="font-bold">Nhà gái</p>
              <div className="flex flex-col items-start">
                <p>Ông Phạm Văn Hiền</p>
                <p>Bà Nguyễn Thị Minh</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'gallery',
      img: undefined,
      content: (
        <div className="w-full p-5 flex flex-col gap-4 items-center justify-center rounded">
          <p
            className="font-bold text-[28px]"
            style={{ fontFamily: 'Sacramento' }}
          >
            OUR PHOTOBOOK
          </p>
          <p className="text-center text-sm md:text-base text-gray-500">
            (Nhấn vào để xem ảnh)
          </p>
          {matches ? (
            <div className="w-full h-full relative flex justify-center items-center">
              <img src="/21.jpg" width={380} height={530} alt="wed21" />
              <div
                className="flex justify-center items-center bg-transparent absolute top-0 left-0 w-full h-full cursor-pointer z-10 text-[40px] text-white hover:bg-black/30"
                onClick={() => setIndex(0)}
              ></div>
            </div>
          ) : (
            <HTMLFlipBook
              width={380}
              height={530}
              className={'bg-white rounded'}
              style={{ borderRadius: 4 }}
              startPage={0}
              size={'fixed'}
              minWidth={0}
              maxWidth={1000}
              minHeight={0}
              maxHeight={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={matches}
              startZIndex={0}
              autoSize={false}
              maxShadowOpacity={0}
              showCover={false}
              mobileScrollSupport={true}
              clickEventForward={false}
              useMouseEvents={true}
              swipeDistance={0}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              <div className="w-full h-[530px] ">
                <img
                  src="/background.jpg"
                  className="max-h-[530px] min-w-[380px]"
                />
                <p
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 w-full h-full content-center leading-[54px] text-[56px] text-center z-10 text-[#45503F]"
                  style={{ fontFamily: 'Great Vibes' }}
                >
                  This is where our story begins.
                </p>
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/21.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/1.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/2.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/2.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/3.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/3.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/4.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/4.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/6.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/6.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/7.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/7.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/8.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/8.2.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/10.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/10.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/11.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/11.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/12.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/12.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:min-h-[530px] min-w-[760px] md:max-h-[530px]">
                <img
                  src="/13.jpg"
                  className="md:min-h-[530px] md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:min-h-[530px] min-w-[760px] md:max-h-[530px]">
                <img
                  src="/13.jpg"
                  className="md:min-h-[530px] hidden md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/14.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/14.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/15.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/15.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img
                  src="/17.jpg"
                  className="md:min-h-[530px] md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img
                  src="/17.jpg"
                  className="md:min-h-[530px] hidden md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/18.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/18.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img
                  src="/19.jpg"
                  className="md:min-h-[530px] md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img
                  src="/19.jpg"
                  className="md:min-h-[530px] hidden md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px] content-center">
                <img src="/20.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/20.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/22.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/22.1.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/22.2.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/22.3.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px] content-center">
                <img src="/24.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img src="/24.1.jpg" className="md:max-h-[530px]" />
                <img src="/24.2.jpg" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px]">
                <img
                  src="/27.jpg"
                  className="md:min-h-[530px] md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px] relative">
                <img
                  src="/27.jpg"
                  className="md:min-h-[530px] hidden md:max-h-[530px] min-w-[760px]"
                />
              </div>
              <div className="w-full h-full md:max-h-[530px] content-center">
                <img src="/29.JPG" className="md:max-h-[530px]" />
              </div>
              <div className="w-full h-full md:max-h-[530px] relative content-center ">
                <img src="/28.jpg" className="min-h-[530px] md:max-h-[530px]" />
                <div className="flex absolute w-full h-full items-center justify-center top-[20%] z-10">
                  <p
                    className="text-[40px] w-full h-full text-[#45503F] text-center font-bold"
                    style={{ fontFamily: 'Allura' }}
                  >
                    The End
                  </p>
                </div>
              </div>
            </HTMLFlipBook>
          )}

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      ),
    },
    {
      id: 'beforeThankyou',
      img: undefined,
      content: <></>,
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
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('beforeThankyou');
      if (element && firstTime.current) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible && !isSubmit) {
          // Notify when the element is in the viewport
          firstTime.current = false;
          setIsModalOpen(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePlayAudio = () => {
      if(audioRef.current && audioRef.current.paused) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    };

    window.addEventListener('scroll', handlePlayAudio);
    return () => {
      window.removeEventListener('scroll', handlePlayAudio);
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
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

      <Modal
        centered
        title={
          <div className="text-[28px] w-full text-center">Bạn sẽ đến chứ?</div>
        }
        open={isModalOpen}
        footer={null}
        width={matches ? 380 : 600}
        onCancel={handleCancel}
      >
        <p className="text-center">
          Đám cưới của chúng tôi sẽ trọn vẹn hơn khi có thêm lời chúc phúc và sự
          hiện diện của các bạn. Xin hãy xác nhận sự có mặt của mình để chúng
          tôi chuẩn bị đón tiếp một cách chu đáo nhất nhé!
        </p>
        <p className="text-center">Trân trọng!</p>

        {!isSubmit ? (
          <div className="w-full h-full">
            <Form
              name="layout-multiple-horizontal"
              layout="vertical"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
            >
              <Form.Item
                layout="vertical"
                label="Họ tên"
                name="name"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input size="small" className="rounded" placeholder="Họ tên" />
              </Form.Item>
              <Form.Item
                layout="vertical"
                label="Số điện thoại"
                name="phone"
                rules={[{ required: false }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input
                  size="small"
                  className="rounded"
                  placeholder="Số điện thoại"
                />
              </Form.Item>
              <Form.Item
                layout="vertical"
                label="Gửi những lời chúc tốt đẹp nhất"
                name="message"
                rules={[{ required: false }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input.TextArea placeholder="Gửi những lựa chúc tốt đẹp nhất" />
              </Form.Item>
              <Form.Item
                layout="vertical"
                label="Bạn sẽ tới dự chứ?"
                name="attendence"
                rules={[{ required: false }]}
                initialValue={'yes'}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Select defaultValue="yes">
                  <Select.Option value="yes">
                    Có, chắc chắn sẽ có mặt &#128513;
                  </Select.Option>
                  <Select.Option value="no">
                    Tiếc quá, mình không thể tới dự được rồi &#128546;
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="flex w-full h-full flex-row items-center justify-center items-center gap-4"
                wrapperCol={{ span: 24 }}
              >
                <Button type="default" htmlType="button" onClick={handleCancel}>
                  Để sau
                </Button>
                &nbsp;
                <Button type="primary" htmlType="submit">
                  Phản hồi
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <div className="w-full h-full">
            <p
              className="w-full h-full text-center text-[28px]"
              style={{ fontFamily: 'Great Vibes' }}
            >
              Cảm ơn bạn đã phản hồi thư mời!
            </p>
          </div>
        )}
      </Modal>
      <Modal
        centered
        title={<div className="text-[28px] w-full text-center">Mừng cưới</div>}
        open={isModalQROpen}
        footer={null}
        onCancel={() => setIsModalQROpen(false)}
      >
        <Tabs
          centered
          defaultActiveKey="1"
          size={'large'}
          items={[
            {
              label: `Nhà trai`,
              key: '1',
              children: <img src="/QR_BOY.jpg" />,
            },
            {
              label: `Nhà gái`,
              key: '2',
              children: <img src="/QR_GIRL.jpg" />,
            },
          ]}
        />
      </Modal>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton
          icon={<QrcodeOutlined />}
          onClick={() => setIsModalQROpen(true)}
        />
        <FloatButton onClick={() => setIsModalOpen(true)} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>

      <audio id="audio" loop ref={audioRef}>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Home;
