const Step1 = (props) => {
  const clickHandler = () => {};

  return (
    <form>
      <div className="w-[340px] mx-4 px-6 pt-8 -mt-[74px] rounded-lg md:w-[625px] md:px-[90px] md:pt-11 md:mt-0 md:mx-0 bg-white">
        <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5">
          Personal info
        </h1>
        <p className="text-coolGray mb-4 md:mb-8">
          Please provide your name, email address, and phone number.
        </p>

        <div className="flex flex-col mb-2">
          <label
            className="text-xs md:text-[15px] text-marineBlue md:mb-1.5"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="rounded md:rounded-lg border-lightGray placeholder-coolGray mb-1 md:mb-4"
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label
            className="text-xs md:text-[15px] text-marineBlue md:mb-1.5"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="rounded md:rounded-lg border-lightGray placeholder-coolGray mb-1 md:mb-4"
            id="email"
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label
            className="text-xs md:text-[15px] text-marineBlue md:mb-1.5"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="rounded md:rounded-lg border-lightGray placeholder-coolGray mb-4"
            id="phone"
            name="phone"
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
      <div className="mt-40 p-4 flex justify-end items-end bg-white md:mt-[96px] md:pb-0">
        <button
          className="px-4 py-2 rounded text-sm bg-marineBlue text-white md:text-base md:rounded-lg md:py-3 md:px-6"
          onClick={clickHandler}
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Step1;
