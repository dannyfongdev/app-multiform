import "./Step2.css";

const pricingTable = [
  {
    id: 1,
    name: "Arcade",
    rate: "$9/mo",
    rate2: "$90/yr",
    img: "./images/icon-arcade.svg",
  },
  {
    id: 2,
    name: "Advanced",
    rate: "$12/mo",
    rate2: "$120/yr",
    img: "./images/icon-advanced.svg",
  },
  {
    id: 3,
    name: "Pro",
    rate: "$15/mo",
    rate2: "$150/yr",
    img: "./images/icon-pro.svg",
  },
];

const Plans = (props) => {
  return (
    <div className="flex flex-col space-y-3 mt-6 md:flex-row md:space-y-0 md:space-x-4">
      {pricingTable.map((item) => {
        let classes =
          "flex space-x-4 p-4 border rounded-lg md:flex-col md:justify-between md:w-[138px] md:space-x-0 hover:cursor-pointer hover:border-marineBlue bg-magnolia";
        if (props.plan === item.name) {
          classes = "border-marineBlue bg-magnolia " + classes;
        }
        return (
          <div
            className={classes}
            key={item.id}
            onClick={(e) => props.onSetPlan(item.name)}
          >
            <img className="w-10 md:mb-10" src={item.img} alt="{item.name}" />
            <div className="space-y-px">
              <h2 className="text-marineBlue font-semibold">{item.name}</h2>
              <p className="text-coolGray text-sm">
                {props.ratePer === "month" ? item.rate : item.rate2}
              </p>
              {props.ratePer === "year" && (
                <p className="text-marineBlue text-sm">2 months free</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Step2 = (props) => {
  const handleRatePer = (isPerYear) => {
    if (isPerYear) {
      props.onSetRatePer("year");
    } else {
      props.onSetRatePer("month");
    }
  };

  return (
    <div className="w-[340px] mx-auto bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
      <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
        Select your plan
      </h1>
      <p className="text-coolGray mb-4 md:mb-8">
        You have the option of monthly or yearly billing.
      </p>

      <Plans
        plan={props.plan}
        onSetPlan={props.onSetPlan}
        ratePer={props.ratePer}
      />

      <div className="flex items-center justify-center w-full my-6 bg-magnolia py-3">
        <div className="mr-3 font-medium">
          <span
            className={
              props.ratePer == "month" ? "text-marineBlue" : "text-coolGray"
            }
          >
            Monthly
          </span>
        </div>
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          {/* <!-- toggle --> */}
          <div className="relative">
            {/* <!-- input --> */}
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onChange={(e) => handleRatePer(e.target.checked)}
              checked={props.ratePer == "year"}
            />
            {/* <!-- line --> */}
            <div className="block bg-marineBlue w-14 h-6 rounded-full"></div>
            {/* <!-- dot --> */}
            <div className="dot absolute left-1 top-1 bg-white w-6 h-4 rounded-full transition"></div>
          </div>
          {/* <!-- label --> */}
          <div className="ml-3 font-medium">
            <span
              className={
                props.ratePer == "year" ? "text-marineBlue" : "text-coolGray"
              }
            >
              Yearly
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Step2;
