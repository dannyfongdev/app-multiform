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

function App() {
  // Current Step State
  const [step, setStep] = useState(2);

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

  const goStep2 = () => {
    setStep (2);
  }

  // Step 1 State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePhone = (value) => {
    setPhone(value);
  };

  // Step 2 State
  const [plan, setPlan] = useState("Arcade");
  const [ratePer, setRatePer] = useState("month"); // "month" or "year"

  // Step 3 State
  const [picks, setPicks] = useState([false, false, false]);

  const handlePick = (index, checked) => {
    const newArray = [...picks];
    newArray[index] = checked;
    setPicks(newArray);
  };

  // Step 4 -- Presentation only, pass state as props
  

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-alabaster md:bg-magnolia">
      <Page step={step}>
        <StepsSidebar step={step} />
        <StepMain>
          {step === 1 && (
            <Step1
              name={name}
              email={email}
              phone={phone}
              onChangeName={handleChangeName}
              onChangeEmail={handleChangeEmail}
              onChangePhone={handleChangePhone}
            />
          )}
          {step === 2 && (
            <Step2
              plan={plan}
              ratePer={ratePer}
              onSetPlan={(value) => {
                setPlan(value);
              }}
              onSetRatePer={(value) => {
                setRatePer(value);
              }}
            />
          )}
          {step === 3 && (
            <Step3 ratePer={ratePer} picks={picks} onPick={handlePick} />
          )}
          {step === 4 && <Step4 plan={plan} ratePer={ratePer} picks={picks} onChangePlan={goStep2} />}
          {step === 5 && <Step5 />}
          <StepNav step={step} onPrev={handlePrev} onNext={handleNext} />
        </StepMain>
      </Page>
    </main>
  );
}

export default App;
