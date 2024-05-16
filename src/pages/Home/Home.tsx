const Home = () => {
  return (
    <div className="flex w-full overflow-y-auto overflow-x-hidden flex-col gap-4 bg-orange-50 font-mono pb-2">
      <div className="w-full h-[500px] border border-1"></div>
      <p className="flex items-center justify-center text-center w-full px-2 text-xs md:text-base">
        "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà
        hai người cùng nhau xây dựng và phát triển."
      </p>
      <div className="flex flex-row">
        <div className="border border-1 w-2/5 h-[60vw]"></div>
        <div className="h-full p-2 w-3/5 flex flex-col justify-center items-center">
          <p className="font-bold text-sm md:text-lg" data-aos="fade-left">
            CÔ DÂU
          </p>
          <link
            href="https://fonts.googleapis.com/css?family=Great Vibes"
            rel="stylesheet"
          />
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
      <div className="flex flex-row">
        <div className="h-full p-2 w-3/5 flex flex-col justify-center items-center">
          <p
            className="font-bold text-sm md:text-lg font-mono"
            data-aos="fade-right"
          >
            CHÚ RỂ
          </p>
          <link
            href="https://fonts.googleapis.com/css?family=Great Vibes"
            rel="stylesheet"
          />
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
        <div className="border border-1 w-2/5 h-[60vw]"></div>
      </div>
      <div className="divide-y-1" />
      <div className="flex flex-col justify-center items-center">
        <link href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
        <p
          className="text-base md:text-2xl"
          style={{ fontFamily: 'Allura' }}
        >
          Thân mời
        </p>
        <p>ĐẾN DỰ LỄ CƯỚI CỦA CHÚNG MÌNH</p>
      </div>
    </div>
  );
};

export default Home;
