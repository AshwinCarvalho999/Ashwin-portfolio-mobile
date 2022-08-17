const recentWorks = document.querySelector('#recent-works');
const portifolio = [
  {
    id: 0,
    headingMobile: 'title of Featured',
    headingDesktop: 'title of Featured longer longer and longer',
    highlight:
      "0 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    highlightDetails:
      "Highlight Featured is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    badge4: 'Ruby',
  },
  {
    id: 1,
    headingMobile: 'title of card 1',
    headingDesktop: 'title of card 1 longer longer and longer',
    highlight:
      '1 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails:
      "Highlight 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project1.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    id: 2,
    headingMobile: 'title of card 2',
    headingDesktop: 'title of card 2 longer longer and longer',
    highlight:
      '2 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails:
      "Highlight 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project2.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    id: 3,
    headingMobile: 'title of card 3',
    headingDesktop: 'title of card 3 longer longer and longer',
    highlight:
      '3 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails:
      "Highlight 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project3.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    id: 4,
    headingMobile: 'title of card 4',
    headingDesktop: 'title of card 4 longer longer and longer',
    highlight:
      '4 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails:
      "Highlight 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project4.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    id: 5,
    headingMobile: 'title of card 5',
    headingDesktop: 'title of card 5 longer longer and longer',
    highlight:
      '5 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails:
      "Highlight 5 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project5.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    id: 6,
    headingMobile: 'title of card 6',
    headingDesktop: 'title of card 6 longer longer and longer',
    highlight:
      '6 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    highlightDetails:
      "Highlight 6 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/project6.jpeg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
];

let article = document.createElement('article');
article.classList = 'featured';
recentWorks.appendChild(article);
let img = document.createElement('img');
img.src = portifolio[0].image;
article.appendChild(img);
let divWrap = document.createElement('div');
divWrap.classList = 'wrap-featured';
article.appendChild(divWrap);
let h3 = document.createElement('h3');
h3.classList = 'card-h';
h3.innerText = portifolio[0].headingMobile;
divWrap.appendChild(h3);
let p = document.createElement('p');
p.id = 'featured-p';
p.innerText = portifolio[0].highlight;
divWrap.appendChild(p);
let div = document.createElement('div');
div.classList = 'lang';
divWrap.appendChild(div);
let ul = document.createElement('ul');
div.appendChild(ul);
let li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
let badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge1;
li.appendChild(badge);
li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge2;
li.appendChild(badge);
li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge3;
li.appendChild(badge);
li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
badge = document.createElement('div');
badge.classList = 'badge';
badge.innerHTML = portifolio[0].badge4;
li.appendChild(badge);
let button = document.createElement('button');
button.id = 'see-feat';
button.classList = 'small-button see-project';
button.innerHTML = 'See Project';
divWrap.appendChild(button);

for (let i = 1; i < 7; i += 1) {
  article = document.createElement('article');
  article.classList = `card card${i}`;
  recentWorks.appendChild(article);

  divWrap = document.createElement('div');
  divWrap.classList = 'wrap-card';
  article.appendChild(divWrap);

  h3 = document.createElement('h3');
  h3.classList = 'card-h';
  h3.innerHTML = portifolio[i].headingMobile;
  divWrap.appendChild(h3);

  p = document.createElement('p');
  p.classList = 'card-p';
  p.innerText = portifolio[i].highlight;
  divWrap.appendChild(p);

  div = document.createElement('div');
  div.classList = 'lang';
  divWrap.appendChild(div);

  ul = document.createElement('ul');
  div.appendChild(ul);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  badge = document.createElement('div');
  badge.classList = 'badge';
  badge.innerHTML = portifolio[i].badge1;
  li.appendChild(badge);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  badge = document.createElement('div');
  badge.classList = 'badge';
  badge.innerHTML = portifolio[i].badge2;
  li.appendChild(badge);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  badge = document.createElement('div');
  badge.classList = 'badge';
  badge.innerHTML = portifolio[i].badge3;
  li.appendChild(badge);

  div = document.createElement('div');
  div.classList = 'card-link';
  article.appendChild(div);
  button = document.createElement('button');
  button.id = `see-project${i}`;
  button.classList = 'see-project';
  button.innerText = 'See Project';
  div.appendChild(button);
}

function fillModal(i) {
  const divContModal = document.createElement('div');
  divContModal.classList = 'modal-container';
  recentWorks.appendChild(divContModal);

  const divModal = document.createElement('div');
  divModal.classList = 'details';
  divContModal.appendChild(divModal);

  const divTop = document.createElement('div');
  divTop.classList = 'modal-top';
  divModal.appendChild(divTop);

  h3 = document.createElement('h3');
  h3.classList = 'details-title h-mobile';
  h3.innerHTML = portifolio[i].headingMobile;
  divTop.appendChild(h3);
  h3 = document.createElement('h3');
  h3.classList = 'details-title h-desktop details-h3';
  h3.innerHTML = portifolio[i].headingDesktop;
  divTop.appendChild(h3);

  const xBtn = document.createElement('div');
  xBtn.innerHTML = '<i id="xBtn" class="fa-solid fa-xmark"></i>';
  divTop.appendChild(xBtn);

  const divBadges = document.createElement('div');
  divBadges.classList = 'lang';
  divModal.appendChild(divBadges);

  ul = document.createElement('ul');
  divBadges.appendChild(ul);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  div = document.createElement('div');
  div.classList = 'badge';
  div.innerHTML = portifolio[i].badge1;
  li.appendChild(div);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  div = document.createElement('div');
  div.classList = 'badge';
  div.innerHTML = portifolio[i].badge2;
  li.appendChild(div);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  div = document.createElement('div');
  div.classList = 'badge';
  div.innerHTML = portifolio[i].badge3;
  li.appendChild(div);

  const divMain = document.createElement('div');
  divMain.classList = 'modal-main';
  divModal.appendChild(divMain);

  img = document.createElement('img');
  img.classList = 'details-img';
  img.src = portifolio[i].image;
  divMain.appendChild(img);

  const divBottom = document.createElement('div');
  divBottom.classList = 'modal-bottom';
  divMain.appendChild(divBottom);

  p = document.createElement('p');
  p.classList = 'card-p details-p';
  p.innerText = portifolio[i].highlightDetails;
  divBottom.appendChild(p);

  const divBtns = document.createElement('div');
  divBtns.classList = 'details-btns-container';
  divBottom.appendChild(divBtns);

  let anchor = document.createElement('a');
  anchor.id = `see-live${1}`;
  anchor.href = portifolio[i].seeLive;
  anchor.target = '_blank';
  divBtns.appendChild(anchor);

  button = document.createElement('button');
  button.classList = 'small-button see-project';
  button.innerHTML =
    'See Live &nbsp; <i class="fa-solid fa-arrow-up-right-from-square -flip-horizontal"></i>';
  anchor.appendChild(button);

  anchor = document.createElement('a');
  anchor.id = `source${1}`;
  anchor.href = portifolio[i].seeSrc;
  anchor.target = '_blank';
  divBtns.appendChild(anchor);
  button = document.createElement('button');
  button.classList = 'small-button see-project';
  button.innerHTML = 'See Source &nbsp;<i class="fa-brands fa-github"></i>';
  anchor.appendChild(button);
}

const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clsmodal = document.querySelector('#cls-modal');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('active');
  mobileMenu.classList.add('active');
});

clsmodal.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  menuBtn.classList.remove('active');
});

const modalBtnFeat = document.querySelector('#see-feat');
modalBtnFeat.addEventListener('click', () => {
  fillModal(0);
});

const modal1Btn = document.querySelector('#see-project1');
modal1Btn.addEventListener('click', () => {
  fillModal(1);
});

const modal2Btn = document.querySelector('#see-project2');
modal2Btn.addEventListener('click', () => {
  fillModal(2);
});

const modal3Btn = document.querySelector('#see-project3');
modal3Btn.addEventListener('click', () => {
  fillModal(3);
});

const modal4Btn = document.querySelector('#see-project4');
modal4Btn.addEventListener('click', () => {
  fillModal(4);
});

const modal5Btn = document.querySelector('#see-project5');
modal5Btn.addEventListener('click', () => {
  fillModal(5);
});

const modal6Btn = document.querySelector('#see-project6');
modal6Btn.addEventListener('click', () => {
  fillModal(6);
});

window.addEventListener('click', (e) => {
  const modalContainer = document.querySelector('.modal-container');
  const xBtn = document.querySelector('#xBtn');
  if (e.target === modalContainer || e.target === xBtn) {
    const portfolioGrid = document.querySelector('#recent-works');
    portfolioGrid.removeChild(modalContainer);
  }
});
