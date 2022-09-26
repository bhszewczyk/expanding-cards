const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
	const active = document.querySelector('.active');
	const clicked = e.target;
	clicked.closest('div').classList.toggle('active');
	active.classList.toggle('active');
});
