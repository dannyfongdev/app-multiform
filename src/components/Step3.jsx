const addOns = [
  {
    id: 1,
    name: "Online service",
    detail: "Access to multiplayer games",
    rateMonthly: "+$1/mo",
    rateAnnual: "+$10/yr",
    checked: true,
  },
  {
    id: 2,
    name: "Larger storage",
    detail: "Extra 1 TB of cloud save",
    rateMonthly: "+$2/mo",
    rateAnnual: "+$20/yr",
    checked: true,
  },
  {
    id: 3,
    name: "Customizable profile",
    detail: "Custom theme on your profile",
    rateMonthly: "+$2/mo",
    rateAnnual: "+$20/yr",
    checked: false,
  },
];

const AddOn = ({ addOn }) => {
  return (
    <div className="flex justify-between items-center p-3 border border-purple-500 rounded-lg md:text-base md:p-4">
      <div className="flex space-x-3 items-center md:space-x-5">
        <div>
          <input id="online" name="online" type="checkbox" />
        </div>
        <div>
          <h2 className="text-marineBlue font-bold">{addOn.name}</h2>{" "}
          <p className="text-coolGray">{addOn.detail}</p>
        </div>
      </div>
      <div>{addOn.rateMonthly}</div>
    </div>
  );
};

const Step3 = () => {
  const clickHandler = () => {};

  return (
    <div className="relative h-[525px] container mx-auto md:h-[570px] md:w-[625px]">
      <div className="w-[340px] mx-auto mb-32 bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
        <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">Pick add-ons</h1>
        <p className="text-coolGray mb-4 md:mb-8">Add-ons help enhance your gaming experience.</p>
        <div>
          <div className="container max-w-lg mx-autoflex flex flex-col space-y-4 mt-8 text-[13px]">
            {addOns.map((item) => (
              <AddOn key={item.id} addOn={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-between p-4 bg-white text-sm md:text-base md:mx-auto md:px-[90px]">
        <button className="py-2 text-coolGray font-bold" onClick={clickHandler}>
          Go Back
        </button>

        <button
          className="px-6 py-2 bg-marineBlue text-white rounded"
          onClick={clickHandler}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
