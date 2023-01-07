import { useState } from "react";

import Page from "./components/Page";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import StepNav from "./components/StepNav";
import StepMain from "./components/StepMain";
import StepsSidebar from "./components/StepsSidebar";

const mockData = {
  plan: "Arcade (monthly)",
  rate: "$9/mo",
  addOns: [
    {
      added: true,
      name: "Online service",
      rate: "+1/mo",
    },
    {
      added: true,
      name: "Larger storage",
      rate: "+2/mo",
    },
    {
      added: false,
      name: "Customizable profile",
      rate: "+2/mo",
    },
  ],
  totalName: "Total (per month)",
  total: "+12/mo",
};

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-alabaster md:bg-magnolia">
      <Page step={step}>
        <StepsSidebar step={step} />
        <StepMain>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 plan={mockData} />}
          {step === 5 && <Step5 />}
          <StepNav step={step} onPrev={handlePrev} onNext={handleNext}/>
        </StepMain>
      </Page>
    </main>
  );
}

export default App;
