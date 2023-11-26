import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Result({Data}){
        let annualData = calculateInvestmentResults(Data);
    return(
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>
                {annualData.map(yearlyData=>
                <tr key={yearlyData.year}>
                    <td>{yearlyData.year}</td>
                    <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearlyData.interest)}</td>
                    <td>{formatter.format(yearlyData.valueEndOfYear - Data.initialInvestment -Data.annualInvestment * yearlyData.year)}</td>
                    <td>{formatter.format(Data.initialInvestment + Data.annualInvestment * yearlyData.year)}</td>
                </tr>)}
            </tbody>
        </table>
    );
}