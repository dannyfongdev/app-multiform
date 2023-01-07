const StepNav = ({ step, onPrev, onNext }) => {

  let classes =
    "absolute w-full bottom-0 mx-auto flex justify-between p-4 mt-4 bg-white md:mt-32 md:w-[470px] md:mx-auto md:bottom-3 md:right-24";
  if (step === 5) {
    classes = "hidden " + classes;
  }

  let classesBack = "py-2 px-1 text-sm font-semibold text-coolGray md:text-base";
  if (step === 1) {
    classesBack = "hidden " + classesBack
  }
  return (
    <div className={classes} >
      <button
        className={classesBack}
        onClick={onPrev}
      >
        Go Back
      </button>

      <button
        className="px-6 py-2 bg-marineBlue text-white rounded ml-auto md:text-base md:py-3 md:rounded-lg"
        onClick={onNext}
      >
        Next Step
      </button>
    </div>
  );
};

export default StepNav;
