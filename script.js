const container = document.querySelector(".container");
const card = document.querySelector("#template");

let myData = [
  {
    playerPic: "images/244149-1618748156.webp",
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