var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad","Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms","Hush Puppies"];

var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap","Chicken Parmesean","Butternut Squash Soup",
"BBQ Chicken Burgers","Ramen","Empanadas","Chicken Fried Rice","Sheet Pan Fajitas","Margarita Pizza"];

var desserts = ["Apple Pie","Lemon Meringue Pie","Black Forest Cake","Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

// Variables:
var letsCookButton = document.querySelector('#lets-cook');
var displayBox = document.querySelector('.box-2');
var mealDisplayTitle = document.querySelector('#meal-title-text');
var mealResult = document.querySelector('.meal-result');
var cookPotImg = document.querySelector('.img');
var clearButton = document.querySelector('#clear');

// event listeners:

letsCookButton.addEventListener('click', displayRecipe);
clearButton.addEventListener('click', showCookPot);

// functions:
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRecipe() {
  var type = document.querySelector('input[name="dish-option"]:checked').value;
  if (type) {
    hideCookPot();
    if (type === 'sides') {
      return getRandomElement(sides);
    } else if (type === 'mains') {
      return getRandomElement(mains);
    } else if (type === 'desserts') {
      return getRandomElement(desserts);
    }
  }
}

function hideCookPot() {
  cookPotImg.classList.add('hidden');
  mealResult.classList.remove('hidden');
  mealDisplayTitle.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}

function showCookPot() {
  cookPotImg.classList.remove('hidden');
  mealResult.classList.add('hidden');
  mealDisplayTitle.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function displayRecipe() {
  event.preventDefault();
  mealResult.innerText = getRecipe();
}
