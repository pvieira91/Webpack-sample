import sum from './sum.js';

//command pattern
const Commands = {SUM:1};

class Calculator{
	execute(command, val1, val2){
		switch(command) {
			case Commands.SUM:
				return sum(val1, val2);
		}
	}
}

module.exports = Calculator;