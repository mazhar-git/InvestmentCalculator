import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import ListData from "./components/ListData/ListData";
import PageHeader from "./components/PageHeader/PageHeader";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results
  
  if (userInput) {
    
    let currentSavings = +userInput["CurrentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["YearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["ExpectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <PageHeader />

      <InputForm onCalculate={calculateHandler} />

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <ListData data={yearlyData} initialInvestment={userInput['CurrentSavings']} />}
      
    </div>
  );
}

export default App;
