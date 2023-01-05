import { useState } from "react";

import Page from "./components/Page";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";


function App() {
  const [step, setStep] = useState(2);

  const nextStepHandler = () => {
    if (step < 5) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const prevStepHandler = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };


  return (
    <main className="h-screen flex flex-col items-center justify-center bg-black md:bg-magnolia">
      <Page step={step}>
          {step === 1 && <Step1 onNextStep={nextStepHandler} />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
      </Page>
    </main>
  );
}

export default App;
