import StepsSidebar from "./StepsSidebar";

const Page = (props) => {
  const nextStepHandler = () => {
    props.onNextStep();
  };

  const prevStepHandler = () => {
    props.onPrevStep();
  };

  return (
    <div className="flex flex-col bg-magnolia md:bg-white md:flex-row md:justify-center md:p-4 md:rounded-xl" >
      <StepsSidebar step={props.step} />
      {props.children}
    </div>
  );
};

export default Page;
