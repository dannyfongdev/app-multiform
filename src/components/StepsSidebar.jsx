const info = [
  {
    id: 1,
    title: "Step 1",
    content: "Your info",
  },
  {
    id: 2,
    title: "Step 2",
    content: "Select plan",
  },
  {
    id: 3,
    title: "Step 3",
    content: "Add-ons",
  },
  {
    id: 4,
    title: "Step 4",
    content: "Summary",
  },
];

const StepInfo = (props) => {
  const highlightStyle = " bg-lightBlue text-marineBlue ";

  return (
    <div className="flex items-center uppercase text-white">
      <div className={"block w-9 h-9 p-1 rounded-full border border-white text-center align-middle" + (props.id === props.step ? highlightStyle : "")}>
        {props.id}
      </div>
      <div className="ml-4 hidden md:block">
        <p className="text-xs text-coolGray">{props.title}</p>
        <p className="text-sm font-bold tracking-wider">{props.content}</p>
      </div>
    </div>
  );
};

const StepsSidebar = ({ step }) => {
  return (
    <div className="bg-[url('./images/bg-sidebar-mobile.svg')] md:bg-[url('./images/bg-sidebar-desktop.svg')] bg-no-repeat w-[375px] h-[172px] flex justify-center space-x-4 items-start py-8  md:justify-start md:space-x-0 md:space-y-7 md:flex-col md:w-[275px] md:h-[568px] md:rounded-xl md:pt-[40px] md:pl-[30px]">
      {info.map((item) => (
        <StepInfo step={step} key={item.id} id={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default StepsSidebar;
