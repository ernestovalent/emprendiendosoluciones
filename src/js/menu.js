
let menu = document.querySelector('.menu');
let hamb = document.querySelector('.hamb');
let background = document.querySelector('.backgroundmenu');
let logo = document.querySelector('.logo');
let header = document.querySelector('header');


new fullpage('#fullpage', {
	anchors: ['inicio', 'who', 'todo', 'projects', 'team', 'contact', 'qr'],
	menu: '.menu',
	navigation: true,
	onLeave: function (origin, destination) {
		menu.classList.remove("active");
		hamb.classList.remove("active");
		background.classList.remove("active");
		if (origin.anchor == "inicio") {
			logo.style.opacity = 1;
			header.style.background = 'rgba(0, 0, 0, 0.2)';
		} else if (destination.anchor == "inicio") {
			logo.style.opacity = 0;
			header.style.background = 'rgba(0, 0, 0, 0)';
		}
	}
});

/* document.addEventListener('DOMContentLoaded', function () {
	console.log('Windows is load');
	let teams = document.querySelector('.teams-slider');
	let mousePosition = { top: 0, left: 0, x: 0, y: 0 };

	const mouseDownHandler = function (e) {
		teams.style.cursor = 'grabbing';
		teams.style.userSelect = 'none';

		pos = {
			left: teams.scrollLeft,
			top: teams.scrollTop,
			x: e.clientX,
			y: e.clientY,
		};

		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};

	const mouseMoveHandler = function (e) {
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;

		teams.scrollTop = pos.top - dy;
		teams.scrollLeft = pos.left - dx;
		console.log(pos);
	};

	const mouseUpHandler = function (e) {
		teams.style.cursor = 'grab';
		teams.style.userSelect = 'user-select';
		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('mouseup', mouseUpHandler);
	}

	teams.addEventListener('mousedown', mouseDownHandler);

	hamb.addEventListener("click", function () {
		hamb.classList.toggle("active");
		menu.classList.toggle("active");
		background.classList.toggle("active");
	}, false);

}); */



document.onclick = function (e) {
	if (e.target === background) {
		hamb.classList.remove("active");
		menu.classList.remove("active");
		background.classList.remove("active");
	};
};

