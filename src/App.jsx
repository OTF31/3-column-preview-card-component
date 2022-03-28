import IconSedans from "./assets/icon-sedans.svg";
import IconSuvs from "./assets/icon-suvs.svg";
import IconLuxury from "./assets/icon-luxury.svg";

const App = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-[1323px] w-[325px] bg-black">
          {/*First card*/}
          <div className="h-1/3	bg-[#E38826]">
            <div className="flex flex-col">
              {/*Icon sedans*/}
              <img
                src={IconSedans}
                alt="Sedans"
                className="h-[50px] w-[85px]"
              />

              {/*Title*/}
              <h1 className="text-white">SEDANS</h1>

              {/*Description*/}
              <p className="text-white">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>

              {/*Button*/}
              <button>Learn more</button>
            </div>
          </div>

          {/*Second card*/}
          <div className="h-1/3 bg-[#006970]">
            {/*Icon suvs*/}
            <img src={IconSuvs} alt="Suvs" className="h-[50px] w-[85px]" />

            {/*Title*/}
            <h1 className="text-white">SUVS</h1>

            {/*Description*/}
            <p className="text-white">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>

            {/*Button*/}
            <button>Learn more</button>
          </div>

          {/*Third card*/}
          <div className="h-1/3 bg-[#004241]">
            {/*Icon luxury*/}
            <img src={IconLuxury} alt="Luxury" className="h-[50px] w-[85px]" />

            {/*Title*/}
            <h1 className="text-white">LUXURY</h1>

            {/*Description*/}
            <p className="text-white">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>

            {/*Button*/}
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
