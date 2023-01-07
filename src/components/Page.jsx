const Page = (props) => {

  return (
    <div className="flex flex-col bg-magnolia md:bg-white md:flex-row md:justify-center md:p-4 md:rounded-xl" >
      {props.children}
    </div>
  );
};

export default Page;
