const firstNames = ["Manish,", "Soumya,", "Sangita,", "Binaya,", "Sunita,", "Arpit,", "Golu,", "Girgit,", "Ankit,", "Suman,", "Manas,", "Manisha,", "Alok,","Sumit,", "Raj,", "Suneana,", "Mantu,", "Raju,", "Balbir,","Bikram,","Subasish,","Amarendra,","Nupur,","Debdash,"];

const secondNames = ["Lisa", "Biki", "Lima", "Avijit", "Kamal", "Pushpita", "Sagarika", "Sanjat", "Anand", "Chinu", "Alibha", "Subhankar", "Roji", "Satish", "Sanket", "Subham", "Subhankar", "Sudam", "Jogesh", "Shibun","Rakesh","Jaishankar", "Pinku"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();
