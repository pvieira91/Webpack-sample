import '../styles/calculator.css';

// let imgSrc = require('../images/calculator.jpg');

import Calculator from './calculator';

class CalculatorView {

	constructor(container){
		this.container = container;
	}


	render() {
		const image = document.createElement('img');
		 image.src = 'https://avatars0.githubusercontent.com/u/11532642?v=3&s=40';

		this.container.append(image);
	}

}

export default CalculatorView;