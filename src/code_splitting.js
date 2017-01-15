const button = document.createElement('button');
button.innerText = 'Click me';

const container = document.createElement('div');

button.onclick = () => {
	//load module
	System.import('./load_image.js')
		.then(module => {
			new module.default(container).render();
		});
};

document.querySelector('body').append(button);
document.querySelector('body').append(container);