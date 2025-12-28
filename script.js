setInterval(function () {
  let projects = document.querySelectorAll('.btn');
  if (window.innerWidth <= 323) {
    projects[1].innerHTML = 'projects';
  } else {
    projects[1].innerHTML = 'My projects';
  }
}, 100);

function menu() {
  let navBar = document.querySelector('.navbar');
  let icon = document.querySelector('i');
  navBar.classList.toggle('active');
  icon.classList.toggle('bx-menu')
  icon.classList.toggle('bx')
  icon.classList.toggle('bx-x')
}
