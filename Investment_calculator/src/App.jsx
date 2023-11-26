import Header from "./components/Header"
import InputForm from "./components/InvestmentForm/InputForm"
import Result from "./components/Result"
import { useState } from "react"

const DEFAULT_VALUE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [inputValues, setInputValues] = useState(DEFAULT_VALUE);
  function HandleInputChange(id, value) {
    setInputValues((prev) => {
      return { ...prev, [id]: +value };
    });
  }

  return (
    <main>
      <Header />
      <InputForm data={inputValues} onResetValue={(id, value)=>HandleInputChange(id, value)}/>
      <Result Data={inputValues} />
    </main>
  )
}

export default App
