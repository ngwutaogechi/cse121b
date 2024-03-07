/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Ngwuta Ogechi Enrica';
const currentYear = 2024;
const profilePicture = 'images/Ogechi Enrica.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Sushi', 'Chocolate'];
foodElement.textContent = favoriteFoods.join(', ');

const additionalFavoriteFood = 'Ice Cream';
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += `<br>${additionalFavoriteFood}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;










