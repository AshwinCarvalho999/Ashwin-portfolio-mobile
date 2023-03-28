const hamburger = document.querySelector('.hamburguer');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.item-nav2');
const previewContainer = document.querySelector('.preview-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

const cardsArr = [
  {
    name: 'card1',
    image: 'Img/P_img/air-sport.png',
    title: 'Todo list',
    text: 'This project is for completing my Capstone Project requirements for first module at Microverse. It consists of two webpages for a Air Sports Clubs, which offers Thrilling Air Sports Activities. It consists of two webpages Home and About with both being responsive to desktop and mobile layouts',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript'],
      other: [['See Live', 'https://airsportsclub.netlify.app/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999/HTML-CSS-JS-Capstone-Project', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card2',
    image: 'Img/P_img/budget-app.jpeg',
    title: 'Professional Art Printing Data',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required; has been the industry\'s standard',
    buttons: {
      langs: ['HTML', 'JavaScript', 'Ruby'],
      other: [['See Live', 'https://ashwin-budget.onrender.com/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999/Budget-App', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card3',
    image: 'Img/P_img/worldmap.png',
    title: 'Metrics webapp',
    text: 'This React capstone project is about building a mobile web application to check a list of metrics that will create making use of React and Redux. Also using an API that provides numeric data about all Country Stats.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript'],
      other: [['See Live', 'https://superlative-lollipop-b2588e.netlify.app/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999/react-redux-capstone', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card4',
    image: 'Img/P_img/todo-list.png',
    title: 'Todo List App',
    text: 'This is an Educational repository, for learning how to install and implement the Webpack, Webpack-CLI and the Webpack-dev-server for a project. This project is written in Javascript with minimal npm scripts and commands. It is a minimal implementation of a To Do list application.',
    buttons: {
      langs: ['HTML', 'CSS', 'Ruby on Rails'],
      other: [['See Live', 'https://ashutosh-todo-app.netlify.app/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999/Todo-List-App', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card5',
    image: 'Img/P_img/calculator.png',
    title: 'Math Magician',
    text: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations, Read a random math-related quote built with react and scss.',
    buttons: {
      langs: ['HTML', 'SCSS', 'React'],
      other: [['See Live', 'https://math-magicians-project-app.netlify.app/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999/Math-Magician', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card6',
    image: 'Img/P_img/Blog.png',
    title: 'Blog App',
    text: 'Blog App will be a classic example of a blog website. You will create a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    buttons: {
      langs: ['HTML', 'CSS', 'Ruby', 'Rails'],
      other: [['See Live', '{live-link}', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999/Blog-App', 'Img/source-icon.svg']],
    },
  },
  {
    name: 'card7',
    image: 'Img/P_img/rockets.png',
    title: 'Space Travelers Hub',
    text: 'A website that consumes the SpaceX API and allows you to reserve rockets and join missions.',
    buttons: {
      langs: ['HTML', 'Bootstrap', 'Ruby on Rails'],
      other: [['See Live', 'https://eloquent-faloodeh-83ffa3.netlify.app/', 'Img/see-project-icon.svg'], ['See Source', 'https://github.com/AshwinCarvalho999', 'Img/source-icon.svg']],
    },
  },
];

const template = (obj) => {
  const div = document.createElement('div');
  div.classList.add('preview');

  const divTop = document.createElement('div');
  divTop.classList.add('preview-divtop');
  const h3 = document.createElement('h3');
  h3.appendChild(document.createTextNode(obj.title));
  h3.classList.add('preview-title');
  const divIcon = document.createElement('div');

  const i = document.createElement('i');
  i.style.height = '12px';
  i.classList.add('cross-menu2');
  i.addEventListener('click', () => {
    previewContainer.classList.toggle('active');
  });
  divIcon.appendChild(i);
  divTop.appendChild(h3);
  divTop.appendChild(i);

  const div1 = document.createElement('div');
  obj.buttons.langs.forEach((btn) => {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(btn));
    div1.appendChild(button);
  });
  div1.classList.add('preview-langs');

  const img = document.createElement('img');
  img.src = obj.image;
  img.alt = 'Showcase image.';
  img.classList.add('preview-img');

  const p = document.createElement('p');
  p.appendChild(document.createTextNode(obj.text));
  p.classList.add('preview-text');

  const div2 = document.createElement('div');
  obj.buttons.other.forEach((btn) => {
    const button = document.createElement('button');
    const [a, b, c] = btn;
    const img = document.createElement('img');
    button.appendChild(document.createTextNode(a));
    button.setAttribute('onclick', `window.location.href="${b}"`);
    img.setAttribute('src', c);
    button.appendChild(img);
    button.setAttribute('id', 'button1');
    button.classList.add('open-project');
    div2.appendChild(button);
  });

  div2.classList.add('preview-buttons');
  div.appendChild(divTop);
  div.appendChild(div1);
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(div2);
  return div;
};

document.querySelectorAll('.grid-item-generic').forEach((card) => {
  const openProject = card.querySelector('.open-project');
  openProject.addEventListener('click', () => {
    let selectedCard;
    const name = card.getAttribute('data-name');
    cardsArr.forEach((card) => {
      if (card.name === name) {
        selectedCard = card;
      }
    });
    const templateFilled = template(selectedCard);
    previewContainer.innerHTML = '';
    previewContainer.appendChild(templateFilled);
    previewContainer.classList.toggle('active');
  });
});