/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Ngwuta Ogechi",
    photo: "path/to/your/Ogechi Enrica.jpg", 
    favoriteFoods: [
      'Rice',
      'Tikka Masala',
      'Prioshki',
      'Shrimp',
      'Banana Cream Pie'
    ],
    hobbies: ['playing piano', 'eating sandwitch', 'reading'], 
    placesLived: []
};


/* Populate Profile Object with placesLived objects */

myProfile.placesLived.push(
    {
      place: 'Plot55 Destiny Homes',
      length: '3 year'

    }

    
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});
