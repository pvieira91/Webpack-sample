
import imgSrc from '../images/calculator.jpg'; //big image should be loaded as ref;


class ImageLoader {

	constructor(container){
		this.container = container;
	}


	render() {
		const image = document.createElement('img');
		image.src = imgSrc;


		this.container.append(image);
	}

}

export default ImageLoader;