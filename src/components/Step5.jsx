const Step5 = () => {
  
  return (
    <div className="relative h-[525px] container mx-auto md:h-[568px] md:w-[625px]">
      <div className="w-[340px] mx-auto mb-32 bg-white rounded-xl -mt-[74px] text-center text-coolGray md:mt-5 md:w-[440px]">
        <div className="flex justify-center pt-[70px] pb-6 md:pb-0 md:pt-[124px]">
          <img
            className="w-[55px] h-[55px] md:w-[80px] md:h-[80px]"
            src="./images/icon-thank-you.svg"
            alt="thank you"
          />
        </div>
        <h1 className="text-2xl mb-1.5 md:text-[33px] font-bold text-marineBlue md:mb-1.5 md:mt-10">
          Thank you!
        </h1>
        <p className="md:text-lg">Thanks for confirming your subscription!</p>
        <p className="px-6 pb-20 md:text-lg">
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Step5;
