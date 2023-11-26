import InputField from "./InputField";


export default function InputForm({data, onResetValue}) {

  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="Initial investment"
          value={data.initialInvestment}
          onChange={(event)=>onResetValue("initialInvestment", event.target.value)}
        />
        <InputField
          label="Annual Investment"
          value={data.annualInvestment}
          onChange={(event)=>onResetValue("annualInvestment", event.target.value)}
        />
      </div>
      <div className="input-group">
        <InputField
          label="Expected Return"
          value={data.expectedReturn}
          onChange={(event) => {onResetValue("expectedReturn", event.target.value);}}
        />
        <InputField
          label="Duration"
          value={data.duration}
          onChange={(event) => {onResetValue("duration", event.target.value);}}
        />
      </div>
    </div>
  );
}
