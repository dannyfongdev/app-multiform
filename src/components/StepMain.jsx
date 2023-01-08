const StepMain = (props) => {
  return (
    <div className="relative h-[590px] container mx-auto md:h-[568px] md:w-[625px]">
      {props.children}
    </div>
  );
};

export default StepMain;
