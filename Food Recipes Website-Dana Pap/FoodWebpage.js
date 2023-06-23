var isLoopEnabled = false;

// Function to toggle the loop button
function toggleLoop() {
  var loopButton = document.getElementById("loopButton");
  isLoopEnabled = !isLoopEnabled;

  if (isLoopEnabled) {
    loopButton.classList.add("active");
  } else {
    loopButton.classList.remove("active");
  }
}

// Function to fetch and display all recipes
function fetchAllRecipes() {
  var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  fetch(url)
    .then(response => response.json())
    .then(data => displayRecipes(data.meals))
    .catch(error => console.log(error));
}

// Function to search recipes by ingredient
function searchByIngredient() {
  var ingredient = document.getElementById("ingredientInput").value;
  var url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayRecipes(data.meals))
    .catch(error => console.log(error));
}

// Function to display the list of recipes
function displayRecipes(recipes) {
  var recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  if (recipes) {
    recipes.forEach(recipe => {
      var recipeItem = document.createElement("div");
      recipeItem.classList.add("recipe-details");
      recipeItem.innerHTML = `
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
        <p>${recipe.strMeal}</p>
      `;

      var getRecipeButton = document.createElement("button");
      getRecipeButton.textContent = "Get recipe";
      getRecipeButton.addEventListener("click", function() {
        getRecipeDetails(recipe.idMeal);
      });

      recipeItem.appendChild(getRecipeButton);
      recipeList.appendChild(recipeItem);
    });
  } else {
    recipeList.innerHTML = "No recipes found";
  }
}

// Function to get recipe details by ID
function getRecipeDetails(recipeId) {
  var url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayRecipeDetails(data.meals[0]))
    .catch(error => console.log(error));
}

// Function to display the detailed recipe information
function displayRecipeDetails(recipe) {
  var recipeName = recipe.strMeal;
  var ingredientList = getIngredientList(recipe);
  var instructions = recipe.strInstructions;
  var recipeImage = recipe.strMealThumb;

  // Check if the modal already exists
  var existingModal = document.getElementById("recipeModal");
  if (existingModal) {
    existingModal.remove(); // Remove the existing modal
  }

  var modalHTML = `
    <div id="recipeModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${recipeName}</h2>
        <div class="recipe-details">
          <div class="recipe-image">
            <img src="${recipeImage}" alt="${recipeName}">
          </div>
          <div class="recipe-instructions">
            <h3>Ingredients:</h3>
            <ul>${ingredientList}</ul>
            <h3>Instructions:</h3>
            <p>${instructions}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  var recipeModal = document.getElementById("recipeModal");
  recipeModal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var recipeModal = document.getElementById("recipeModal");
  recipeModal.style.display = "none";
}

// Function to format the ingredient list
function getIngredientList(recipe) {
  var ingredients = [];
  for (var i = 1; i <= 20; i++) {
    var ingredient = recipe["strIngredient" + i];
    var measure = recipe["strMeasure" + i];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  return ingredients.join("<br>");
}

// Call fetchAllRecipes on page load
window.onload = fetchAllRecipes;
