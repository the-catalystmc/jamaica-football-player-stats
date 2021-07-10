const container = document.querySelector(".container__cards");
const card = document.querySelector("#template");

let myData = [
  {
    playerPic: "images/andre.jpeg",
    playerName: "Andre Blake",
    playerAge: "30",
    playerClub: "Philadelphia Union",
    playerPosition: "GK",
    playerApp: "45",
    playerNumbers: "10",
    playerDue: "Clean Sheets",
  },

  {
    playerPic: "images/mattocks.png",
    playerName: "Darren Mattocks",
    playerAge: "30",
    playerClub: "Al-Merrikh ",
    playerPosition: "F",
    playerApp: "50",
    playerNumbers: "12",
    playerDue: "Goals",
  },
  {
    playerPic: "images/images.jpeg",
    playerName: "Alvas Powell",
    playerAge: "27",
    playerClub: "Philadelphia Union",
    playerPosition: "D",
    playerApp: "49",
    playerNumbers: "2",
    playerDue: "Goals",
  },
];

const modalWindow = document.querySelector('.container__modal');

const displayModalWindow = (projectInfo) => {
modalWindow.querySelector('.container__profilepic').src = projectInfo.playerPic;

document.querySelector('.overlay').style.display = 'flex'; 
}

const createProjectElement = (projectInfo) => {
  const clone = card.content.firstElementChild.cloneNode(true);
  clone.querySelector('.card__profilepic').src = projectInfo.playerPic;
  clone.querySelector('.card__name').innerText = projectInfo.playerName;
//   clone.querySelector('p').innerText = projectInfo.playerAge;
  clone.querySelector('.card__club').innerText = projectInfo.playerClub;
  clone.querySelector('.role').innerText = projectInfo.playerPosition;
  clone.querySelector('.app').innerText = projectInfo.playerApp;
  clone.querySelector('.num').innerText = projectInfo.playerNumbers;
  clone.querySelector('.contri').innerText = projectInfo.playerDue;

  clone.querySelector('.card__btn').addEventListener('click', () => {
    displayModalWindow(projectInfo);
  })

  container.appendChild(clone);
};

const setUpPage = () => {
    myData.forEach((data) => {
        createProjectElement(data);
    })
}

window.addEventListener('load', () => {
    setUpPage();
  });

  const menuBtn = document.querySelector('.header__menu');
  const closeMenuBtn = document.querySelector('.header__pop-menu--button');
  const menuItem = document.querySelector('.header__pop-menu--navlist');

  const modalClose = document.querySelector('.container__modal--button');

  modalClose.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
  })

  menuBtn.addEventListener('click', () => {
    document.querySelector('.header__pop-menu').style.display = 'flex';
  })

  closeMenuBtn.addEventListener('click', () => {
    document.querySelector('.header__pop-menu').style.display = 'none';
  })

  menuItem.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'A') {
      document.querySelector('.header__pop-menu').style.display = 'none';
    }
  });
