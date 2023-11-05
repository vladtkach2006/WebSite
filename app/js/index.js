// Function for smooth scrolling the page to the element
const slowScroll = (id) => {
  const element = document.querySelector(id);
  if (element) {
    const offset = element.offsetTop - 50;
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  }
  return false;
};

// Find the elements
const menuButton = document.querySelector('.header-top .menu');
const mobileMenu = document.querySelector('header .mobile-menu');

// Add an event processor to a click
menuButton.addEventListener('click', () => {
  mobileMenu.style.display === 'block' || mobileMenu.style.display === ''
    ? (menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>')
    : (menuButton.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>');

  mobileMenu.style.display =
    mobileMenu.style.display === 'none' ? 'block' : 'none';
});

// Function for changing the size of the video
const resizeVideo = () => {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    const width = iframe.clientWidth;
    iframe.style.height = width / 1.77 + 'px';
  });
};

// Event handler for opening/closing the modal window from the video
const videoPlayButton = document.querySelector('.video-play');
const closeButton = document.querySelector('#modal-video .close-button');
const modalVideo = document.getElementById('modal-video');

videoPlayButton.addEventListener('click', () => {
  modalVideo.style.display =
    modalVideo.style.display === 'none' ? 'block' : 'none';
  document.body.classList.add('overflow-hidden');
  resizeVideo();
});

closeButton.addEventListener('click', () => {
  modalVideo.style.display = 'none';
  document.body.classList.remove('overflow-hidden');
});

// Event processor to change the size of the video when changing the size of the window
window.addEventListener('resize', resizeVideo);
window.dispatchEvent(new Event('resize')); // Calling the ResizeVideo function when downloading page

// The event processor to verify the entered email
const subscribeBtn = document.getElementById('subscribeBtn');

subscribeBtn.addEventListener('click', () => {
  let e = document.getElementById('email').value.trim();
  if (
    e.split('@').length === 2 &&
    e.split('.').length === 2 &&
    e.length >= 10
  ) {
    return true; // If the correct email is introduced, you can send a form
  } else {
    const subFormLabel = document.querySelector('#subForm label');
    subFormLabel.textContent = 'You introduced the wrong email';
    subFormLabel.style.display = 'block';
    setTimeout(() => {
      subFormLabel.style.display = 'none';
    }, 1500);
    return false;
  }
});
