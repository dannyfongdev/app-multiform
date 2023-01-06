import "./Step2.css";

const ratesMonthly = [
  {
    id: 1,
    name: "Arcade",
    rate: "$9/mo",
    img: "./images/icon-arcade.svg",
  },
  {
    id: 2,
    name: "Advanced",
    rate: "$12/mo",
    img: "./images/icon-advanced.svg",
  },
  {
    id: 3,
    name: "Pro",
    rate: "$15/mo",
    img: "./images/icon-pro.svg",
  },
];

const Plans = ({ selectedId }) => {
  return (
    <div className="flex flex-col space-y-3 mt-6 md:flex-row md:space-y-0 md:space-x-4">
      {ratesMonthly.map((item) => {
        let classes =
          "flex space-x-4 p-4 border rounded-lg md:flex-col md:justify-between md:w-[138px] md:h-[158px] md:space-x-0";
        if (selectedId === item.id) {
          classes = "border-marineBlue bg-magnolia " + classes;
        }
        return (
          <div className={classes} key={item.id}>
            <img className="w-10" src={item.img} alt="{item.name}" />
            <div>
              <h2 className="text-marineBlue font-semibold">{item.name}</h2>
              <p className="text-coolGray text-sm">{item.rate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Step2 = () => {
  const clickHandler = () => {};
  return (
    <div className="h-[525px] container mx-auto md:h-[570px] md:w-[625px]">
      <div className="w-[340px] mx-auto bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
        <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
          Select your plan
        </h1>
        <p className="text-coolGray mb-4 md:mb-8">
          You have the option of monthly or yearly billing.
        </p>

        <Plans selectedId={1} />

        <div className="flex items-center justify-center w-full my-6 bg-alabaster py-2">
          <div className="mr-3 text-gray-700 font-medium">Monthly</div>
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            {/* <!-- toggle --> */}
            <div className="relative">
              {/* <!-- input --> */}
              <input type="checkbox" id="toggleB" className="sr-only" />
              {/* <!-- line --> */}
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              {/* <!-- dot --> */}
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            {/* <!-- label --> */}
            <div className="ml-3 text-gray-700 font-medium">Yearly</div>
          </label>
        </div>
      </div>
      <div className="flex justify-between p-4 mt-4 bg-white md:mt-32 md:w-[470px] md:mx-auto">
        <button
          className="py-2 px-1 text-sm font-semibold text-coolGray md:text-base"
          onClick={clickHandler}
        >
          Go Back
        </button>

        <button
          className="px-6 py-2 bg-marineBlue text-white rounded md:text-base md:py-3 md:rounded-lg"
          onClick={clickHandler}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
