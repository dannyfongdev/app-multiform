const Step4 = ({ plan }) => {
  const clickHandler = () => {};

  // Step4 expects read-only strings from props
  // it does NOT do any calculations or pricing lookups

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
            <h2 className="text-marineBlue font-bold">{plan.plan}</h2>
            <p className="underline hover:cursor-pointer">Change</p>
          </div>
          <div className="text-marineBlue font-bold">{plan.rate}</div>
        </div>
        <div className="border-t my-3 md:my-5"></div>
        {plan.addOns.map((item) => {
          if (item.added) {
            return (
              <div
                key={item.name}
                className="flex justify-between items-center text-sm mb-2 md:text-base md:mb-3"
              >
                <div>
                  <p className="">{item.name}</p>
                </div>
                <div className="text-marineBlue">{item.rate}</div>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-between items-center text-sm mt-6 mx-4 md:text-base">
        <div>
          <p className="text-coolGray">{plan.totalName}</p>
        </div>
        <div className="text-purplishBlue font-bold text-base md:text-lg">
          {plan.total}
        </div>
      </div>
    </div>
  );
};

export default Step4;
