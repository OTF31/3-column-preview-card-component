import IconSedans from "./assets/icon-sedans.svg";
import IconSuvs from "./assets/icon-suvs.svg";
import IconLuxury from "./assets/icon-luxury.svg";

const App = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-[#F2F2F2] py-[90px]">
        <div className="w-[325px] rounded-lg">
          {/*First card*/}
          <div className="h-[441px]	rounded-t-lg bg-[#E38826] px-[50px]">
            <div className="flex h-full flex-col justify-evenly py-6">
              {/*Icon sedans*/}
              <img
                src={IconSedans}
                alt="Sedans"
                className="h-[35px] w-[70px]"
              />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[40px] text-[#F2F2F2]">
                SEDANS
              </h1>

              {/*Description*/}
              <p className="font-lexendDeca text-[15px] text-[#FFFFFF]">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>

              {/*Button*/}
              <button className="h-[50px] w-[145px] rounded-3xl bg-[#F2F2F2] font-lexendDeca text-[17px] text-[#E38826]">
                Learn more
              </button>
            </div>
          </div>

          {/*Second card*/}
          <div className="h-[441px] bg-[#006970] pl-[50px] pr-[50px]">
            <div className="flex h-full flex-col justify-evenly py-6">
              {/*Icon suvs*/}
              <img src={IconSuvs} alt="Suvs" className="h-[35px] w-[70px]" />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[40px] text-[#F2F2F2]">
                SUVS
              </h1>

              {/*Description*/}
              <p className="font-lexendDeca text-[15px] text-[#FFFFFF]">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>

              {/*Button*/}
              <button className="h-[50px] w-[145px] rounded-3xl bg-[#F2F2F2] font-lexendDeca text-[17px] text-[#006970]">
                Learn more
              </button>
            </div>
          </div>

          {/*Third card*/}
          <div className="h-[441px] rounded-b-lg bg-[#004241] pl-[50px] pr-[50px]">
            <div className="flex h-full flex-col justify-evenly py-6">
              {/*Icon luxury*/}
              <img
                src={IconLuxury}
                alt="Luxury"
                className="h-[35px] w-[70px]"
              />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[40px] text-[#F2F2F2]">
                LUXURY
              </h1>

              {/*Description*/}
              <p className="font-lexendDeca text-[15px] text-[#FFFFFF]">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>

              {/*Button*/}
              <button className="h-[50px] w-[145px] rounded-3xl bg-[#F2F2F2] font-lexendDeca text-[17px] text-[#004241]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
