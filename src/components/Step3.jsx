const addOns = [
  {
    id: "service",
    name: "Online service",
    detail: "Access to multiplayer games",
    rate1: "+$1/mo",
    rate2: "+$10/yr",
  },
  {
    id: "storage",
    name: "Larger storage",
    detail: "Extra 1 TB of cloud save",
    rate1: "+$2/mo",
    rate2: "+$20/yr",
  },
  {
    id: "profile",
    name: "Customizable profile",
    detail: "Custom theme on your profile",
    rate1: "+$2/mo",
    rate2: "+$20/yr",
  },
];

const AddOn = (props) => {

  const classes = "flex justify-between items-center p-3 border border-coolGray rounded-lg md:text-base md:p-4 hover:border-purplishBlue" + (props.checked ? " bg-magnolia border-purplishBlue" : "")
  
  return (
    <div className={classes}>
      <div className="flex space-x-3 items-center md:space-x-5">
        <div>
          <input
            name={props.addOn.id}
            type="checkbox"
            onChange={(e) => props.onPick(props.index, e.target.checked)}
            checked={props.checked}
          />
        </div>
        <div>
          <h2 className="text-marineBlue font-bold">{props.addOn.name}</h2>{" "}
          <p className="text-coolGray">{props.addOn.detail}</p>
        </div>
      </div>
      <div>
        {props.ratePer == "month" ? props.addOn.rate1 : props.addOn.rate2}
      </div>
    </div>
  );
};

const Step3 = (props) => {
  const handlePick = (index, checked) => {
    props.onPick(index, checked);
  }

  return (
    <div className="w-[340px] mx-auto mb-32 bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
      <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
        Pick add-ons
      </h1>
      <p className="text-coolGray mb-4 md:mb-8">
        Add-ons help enhance your gaming experience.
      </p>
      <div>
        <div className="container max-w-lg mx-autoflex flex flex-col space-y-4 mt-8 text-[13px]">
          {addOns.map((item, index) => (
            <AddOn
              key={item.id}
              addOn={item}
              ratePer={props.ratePer}
              onPick={handlePick}
              index={index}
              checked={props.picks[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
