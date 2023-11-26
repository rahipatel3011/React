import image from '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
        <div id="header">
            <img src={image} alt="investment_image" />
            <h1>investment Calculator</h1>
        </div>
    );
}