import { useState } from "react";

const Step1 = (props) => {
  // used for form validation messages in jsx
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPhone, setMsgPhone] = useState("");

  // lift state of field values upward
  const handleChangeName = (e) => {
    props.onChangeName(e.target.value);
    setMsgName("");
  };
  const handleChangeEmail = (e) => {
    props.onChangeEmail(e.target.value);
    setMsgEmail("");
  };
  const handleChangePhone = (e) => {
    props.onChangePhone(e.target.value);
    setMsgPhone("");
  };

  // validate the fields on blur
  // required fields
  const handleRequired = (e) => {
    if (e.target.value.trim().length === 0) {
      return "This field is required";
    } else {
      return "";
    }
  };
  // email field
  const handleEmail = (e) => {
    if (!e.target.value.includes("@")) {
      return "Email is invalid";
    } else {
      return "";
    }
  };
  const handleBlurName = (e) => {
    setMsgName(handleRequired(e));
  };
  const handleBlurEmail = (e) => {
    setMsgEmail(handleEmail(e));
  };
  const handleBlurPhone = (e) => {
    setMsgPhone(handleRequired(e));
  };

  // add this class to make input outline red
  const redOutline = " outline outline-1 outline-strawberryRed ";

  return (
    <div className="w-[340px] mx-auto bg-white rounded-xl -mt-[74px] p-6 md:mt-5 md:w-[440px] md:p-0">
      <h1 className="text-2xl mb-1 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
        Personal info
      </h1>
      <p className="text-coolGray mb-4 md:mb-8">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col mb-2">
        <div className="flex justify-between">
          <label
            className="text-xs md:text-[15px] text-marineBlue md:mb-1.5"
            htmlFor="name"
          >
            Name
          </label>
          <span className="text-strawberryRed font-semibold text-xs md:text-sm">
            {msgName}
          </span>
        </div>
        <input
          className={
            "font-semibold rounded md:rounded-lg border-lightGray placeholder-coolGray mb-1 md:mb-4" +
            (msgName ? redOutline : "")
          }
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Stephen King"
          onChange={handleChangeName}
          onBlur={handleBlurName}
          autoComplete="off"
          value={props.name}
        />
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex justify-between">
          <label
            className="text-xs md:text-[15px] text-marineBlue md:mb-1.5"
            htmlFor="email"
          >
            Email Address
          </label>
          <span className="text-strawberryRed font-semibold text-xs md:text-sm">
            {msgEmail}
          </span>
        </div>
        <input
          className={
            "font-semibold rounded md:rounded-lg border-lightGray placeholder-coolGray mb-1 md:mb-4" +
            (msgEmail ? redOutline : "")
          }
          id="email"
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          autoComplete="off"
          value={props.email}
        />
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex justify-between">
          <label
            className="text-xs md:text-[15px] text-marineBlue md:mb-1.5"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <span className="text-strawberryRed font-semibold text-xs md:text-sm">
            {msgPhone}
          </span>
        </div>
        <input
          className={
            "font-semibold rounded md:rounded-lg border-lightGray placeholder-coolGray mb-1 md:mb-4" +
            (msgPhone ? redOutline : "")
          }
          id="phone"
          name="phone"
          type="text"
          placeholder="e.g. +1 234 567 890"
          onChange={handleChangePhone}
          onBlur={handleBlurPhone}
          autoComplete="off"
          value={props.phone}
        />
      </div>
    </div>
  );
};

export default Step1;
