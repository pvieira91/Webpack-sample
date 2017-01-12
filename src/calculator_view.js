import '../styles/calculator.css';

import imgSrc from '../images/calculator.jpg'; //big image should be loaded as ref;
import avatarImgSrc from '../images/avatar.png'; //small image should be loaded as base64

import Calculator from './calculator';

class CalculatorView {

	constructor(container){
		this.container = container;
	}


	render() {
		const image = document.createElement('img');
		image.src = imgSrc;

		const avatar = document.createElement('img');
		avatar.src = avatarImgSrc;

		this.container.append(image);
		this.container.append(avatar);
	}

}

export default CalculatorView;