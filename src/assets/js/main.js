const burgerMenu = () => {
	const burger = document.querySelector('.burger');
	const mobileMenu = document.querySelector('.header__nav');
	const overlay = document.querySelector('.overlay');
	const body = document.body;
	console.log(burger, mobileMenu, overlay, body);

	const toggleActiveClass = () => {
		burger.classList.toggle('active');
		overlay.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		body.classList.toggle('disable-scroll');
	};

	burger.addEventListener('click', toggleActiveClass);

	overlay.addEventListener('click', toggleActiveClass);

	window.addEventListener('resize', () => {
		const { innerWidth } = window;
		if (innerWidth > 991.98) {
			burger.classList.remove('active');
			overlay.classList.remove('active');
			mobileMenu.classList.remove('active');
			body.classList.remove('disable-scroll');
		}
	});
};

burgerMenu();

const navLinks = document.querySelectorAll('.menu__link');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		removeCurrentLinks();
		link.classList.add('menu__link_current');
	});
});

const removeCurrentLinks = () => {
	navLinks.forEach(link => link.classList.remove('menu__link_current'));
};

const video = document.querySelector('.film__video');
const videoPlayBtn = document.querySelector('.film__btn');

const toggleVideo = () => {
	video.play();
	video.controls = true;
	videoPlayBtn.style.display = 'none';
};

videoPlayBtn.addEventListener('click', toggleVideo);
