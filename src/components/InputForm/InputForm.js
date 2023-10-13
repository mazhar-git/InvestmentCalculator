import { useState } from "react";

const InitialUserInput = {
  'CurrentSavings': 10000,
  'YearlyContribution': 1500,
  'ExpectedReturn': 8,
  duration: 10,
};
const InputForm = (props) => {
  const [userInput, setUserInput] = useState(InitialUserInput);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
;
  };

  const resetHandle = () => {
    setUserInput(InitialUserInput);
  };

  const inputChangeHandle = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["CurrentSavings"]}
            onChange={(event) =>
              inputChangeHandle("CurrentSavings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput['YearlyContribution']}
            onChange={(event) =>
              inputChangeHandle("YearlyContribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['ExpectedReturn']}
            onChange={(event) =>
              inputChangeHandle("ExpectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandle("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandle}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
