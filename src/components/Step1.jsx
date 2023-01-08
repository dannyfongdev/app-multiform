const Step1 = (props) => {
  const handleChangeName = (e) => props.onChangeName(e.target.value);
  const handleChangeEmail = (e) => props.onChangeEmail(e.target.value);
  const handleChangePhone = (e) => props.onChangePhone(e.target.value);

  return (
    <div className="w-[340px] mx-auto bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
      <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
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
          onChange={handleChangeName}
          autoComplete="off"
          value={props.name}
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
          onChange={handleChangeEmail}
          autoComplete="off"
          value={props.email}
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
          onChange={handleChangePhone}
          autoComplete="off"
          value={props.phone}
        />
      </div>
    </div>
  );
};

export default Step1;
