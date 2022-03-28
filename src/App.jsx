import IconSedans from "./assets/icon-sedans.svg";
import IconSuvs from "./assets/icon-suvs.svg";
import IconLuxury from "./assets/icon-luxury.svg";

const App = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#F2F2F2]">
        <div className="h-[1323px] w-[325px] bg-black">
          {/*First card*/}
          <div className="h-1/3	bg-[#E38826]">
            <div className="flex h-full flex-col justify-between py-6">
              {/*Icon sedans*/}
              <img
                src={IconSedans}
                alt="Sedans"
                className="h-[50px] w-[85px]"
              />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[#F2F2F2]">
                SEDANS
              </h1>

              {/*Description*/}
              <p className="text-[#FFFFFF]">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>

              {/*Button*/}
              <button className="bg-[#F2F2F2]">Learn more</button>
            </div>
          </div>

          {/*Second card*/}
          <div className="h-1/3 bg-[#006970]">
            <div className="flex h-full flex-col justify-between py-6">
              {/*Icon suvs*/}
              <img src={IconSuvs} alt="Suvs" className="h-[50px] w-[85px]" />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[#F2F2F2]">SUVS</h1>

              {/*Description*/}
              <p className="text-[#FFFFFF]">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>

              {/*Button*/}
              <button className="bg-[#F2F2F2]">Learn more</button>
            </div>
          </div>

          {/*Third card*/}
          <div className="h-1/3 bg-[#004241]">
            <div className="flex h-full flex-col justify-between py-6">
              {/*Icon luxury*/}
              <img
                src={IconLuxury}
                alt="Luxury"
                className="h-[50px] w-[85px]"
              />

              {/*Title*/}
              <h1 className="font-bigShouldersDisplay text-[#F2F2F2]">
                LUXURY
              </h1>

              {/*Description*/}
              <p className="text-[#FFFFFF]">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>

              {/*Button*/}
              <button className="bg-[#F2F2F2]">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
