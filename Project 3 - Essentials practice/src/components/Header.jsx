import logoImg from '../assets/investment-calculator-logo.png';
export default function Header() {
	return (
		<header id="header">
			<img src={logoImg} alt="Green bag with a money" />
			<h1>Investment Calculator</h1>
		</header>
	);
}
