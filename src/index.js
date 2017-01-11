import  CalculatorView from './calculator_view.js';


class Bootstrap {

	_getRootElement(){
		return document.querySelector('body');
	}

	execute(){
		new CalculatorView(this._getRootElement()).render();
	}

}


new Bootstrap()
	.execute();