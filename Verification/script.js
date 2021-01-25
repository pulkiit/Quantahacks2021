const firstWord = ["Cool","Amazing","Super","Fantastic","Superb","Magnificent","Awesome","Wacky","Crazy","Bizarre"];
const lastWord = ["Dog","Elephant","Cat","Tiger","Zebra","Lion","Wildebeast","Bird","Hamster","Squirrel","Giraffe","Fish","Shark","Mouse"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () =>
`${firstWord[getRandomNumber(firstWord.length)]} ${lastWord[getRandomNumber(lastWord.length)]}`;

document.getElementById('random-name').innerText = getRandomName();