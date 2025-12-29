const navBar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');
const projects = document.querySelectorAll('.btn');
const isNotDesctop = () => window.innerWidth <= 1250;
const readMoreText = document.querySelectorAll('p')[1];
const readMoreBtn = document.querySelector('#readMore');
const firstServiceBoxHeight = document.querySelectorAll('.service-box')[0].clientHeight;
const scndAndThirdServiceBox = document.querySelectorAll('.service-box')[1, 2];
const EmailMeBtn = document.querySelector('button');
const form = document.querySelector('.form');

//Prüft ob Bildschirm unter 324px breite hat und wechselt button-schrift von "My Projects" zu "Projekts" und andersrum.
setInterval(function () {
  if (window.innerWidth <= 323) {
    projects[1].innerHTML = 'projects'
  } else {
    projects[1].innerHTML = 'My projects'
  }
}, 5000)

//schließt menü 350ms nach drücken eines Links im menü.
document.querySelectorAll('.l').forEach(link => {
  link.addEventListener('click', () => {
    if (isNotDesctop()) {
      setTimeout(() => {
        openCloseMenu()
      }, 350)
    }
  })
})

//öffnet oder schließt menü nach druck auf menü-Offnen/schließen icon.
function openCloseMenu() {
  navBar.classList.toggle('active')
  if (navBar.classList.contains('active')) {
    menuIcon.innerHTML = `<svg class="menu-icon close-icon" onclick="openCloseMenu()" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>`
  } else {
    menuIcon.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="menu-icon"
          onclick="openCloseMenu()"
        >
          <title>menu</title>
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="#ea580c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`
  }
}

//Read more button Funktion.
function readMore() {
  if (window.innerWidth <= 1250 && !readMoreText.classList.contains('read-more-active')) {
    readMoreText.classList.add('read-more-active')
    readMoreText.innerHTML += `<br>I am constantly <span class="blue">expanding my skill set</span> by learning <span class="blue">new technologies</span> and <span class="blue">adapting quickly</span> to evolving <span class="blue">project requirements</span>. <span class="blue">Collaboration</span> and <span class="blue">clear communication</span> are central to my workflow, enabling me to translate <span class="blue">ideas into practical</span>, <span class="blue">high-quality solutions</span>. I approach every project with <span class="blue">attention to detail</span>, a <span class="blue">problem-solving mindset</span>, and a strong commitment to delivering <span class="blue">reliable</span>, <span class="blue">scalable</span>, and <span class="blue">maintainable software</span>. I consistently follow <span class="blue">best practices</span>, allowing me to <span class="blue">maximize efficiency, ensure code quality, and drive project success</span>.`
    readMoreBtn.innerHTML = 'Read Less'
  }
  else if (readMoreText.classList.contains('read-more-active')) {
    readMoreBtn.innerHTML = 'Read More'
    readMoreText.classList.remove('read-more-active')
    readMoreText.innerHTML = `I am a dedicated <span class="blue">web developer</span> and software
      engineer with extensive experience in modern digital solutions. My
      focus lies in developing <span class="blue">efficient</span>,
      <span class="blue">user-friendly</span>,
      <span class="blue">and aesthetically</span>
      pleasing websites and applications. With expertise in
      <span class="blue">frontend technologies</span> (HTML, CSS,
      JavaScript) and <span class="blue">backend development</span>, I
      ensure that my projects are both technically
      <span class="blue">robust and visually compelling</span>. I value
      clean code, performance optimization, and current web standards.`
  }
}

//setzt min-height von 2 und 3 service-box fest
if (window.innerWidth >= 866) {
  scndAndThirdServiceBox.style.minHeight = `${firstServiceBoxHeight}px !important`;
}

//mailto Funktion: Email senden durch E-mail Me button
EmailMeBtn.addEventListener('click', () => {
  const myEmail = 'issahoussam2011@gmail.com';
  const subject = '';
  const body = `Dear Mr. Issa,
  ...`
  const mailToLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailToLink;
  setTimeout(() => {
    if (confirm('No Mail-Client found! Open G-mail?')) {
      const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(myEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailLink, '_blank');
    }
  }, 1500);
});

//Contact Formular E-mail abschicken
emailjs.init('wozYpbnrMc3EovfmW');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm(
    'service_hc1opjo',
    'template_hwcstb9',
    form
  )
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
    })
});