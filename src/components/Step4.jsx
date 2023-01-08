const addOnRates = [1, 2, 2]; // yearly rates are 10, 20, 20

const Step4 = (props) => {
  // Set base price
  let basePrice = 0;
  switch (props.plan) {
    case "Arcade":
      basePrice = 9; // yearly rate 90
      break;
    case "Advanced":
      basePrice = 12; // yearly rate 120
      break;
    case "Pro":
      basePrice = 15; // yearly rate 150
      break;
  }
  if (props.ratePer === "year") {
    basePrice = basePrice * 10;
  }

  // Calculate total price
  let totalPrice = basePrice;
  let totalName;
  props.picks.forEach((item, index) => {
    if (item) {
      if (props.ratePer === "month") {
        totalPrice += addOnRates[index];
      } else {
        totalPrice += addOnRates[index] * 10;
      }
    }
  });
  if (props.ratePer === "month") {
    totalName = "Total (per month)";
  } else {
    totalName = "Total (per year)";
  }

  // help format monthly vs yearly
  function formatPrice(rate) {
    if (props.ratePer === "month") {
      return "$" + rate + "/mo";
    } else {
      return "$" + rate + "/yr";
    }
  }

  // set add-ons based on picks
  let addOns = [
    { added: false, name: "Online service", rate: 1 },
    { added: false, name: "Larger storage", rate: 2 },
    { added: false, name: "Customizable profile", rate: 2 },
  ];
  addOns.forEach((item, index) => {
    item.added = props.picks[index];
    if (props.ratePer === "year") {
      item.rate = item.rate * 10;
    }
  });

  return (
    <div className="w-[340px] mx-auto mb-32 bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
      <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
        Finshing up
      </h1>
      <p className="text-coolGray mb-4 md:mb-8">
        Double-check everything OK before confirming.
      </p>
      <div className="bg-alabaster rounded-lg p-4 text-coolGray">
        <div className="flex justify-between items-center text-sm md:text-base">
          <div>
            <h2 className="text-marineBlue font-bold">
              {props.plan +
                (props.ratePer === "month" ? " (Monthly)" : " (Yearly)")}
            </h2>
            <p className="underline hover:cursor-pointer">Change</p>
          </div>
          <div className="text-marineBlue font-bold">
            {formatPrice(basePrice)}
          </div>
        </div>
        <div className="border-t my-3 md:my-5"></div>
        {addOns.map((item) => {
          if (item.added) {
            return (
              <div
                key={item.name}
                className="flex justify-between items-center text-sm mb-2 md:text-base md:mb-3"
              >
                <div>
                  <p className="">{item.name}</p>
                </div>
                <div className="text-marineBlue">
                  {"+" + formatPrice(item.rate)}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-between items-center text-sm mt-6 mx-4 md:text-base">
        <div>
          <p className="text-coolGray">{totalName}</p>
        </div>
        <div className="text-purplishBlue font-bold text-base md:text-lg">
          {formatPrice(totalPrice)}
        </div>
      </div>
    </div>
  );
};

export default Step4;
