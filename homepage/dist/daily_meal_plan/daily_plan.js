
function fetching(calories) {
    fetch('https://api.spoonacular.com/mealplanner/generate?apiKey=de559a9360ca444db609c4915be035ca&timeFrame=day&targetCalories='+calories,)
        .then(response => response.json())
      .then(data => {
        console.log(data);
        const htmlholder2 = setMealData(data);
        const htmlholder = data.meals.map(meals =>{ 
          return `
            <div class = "meals">
              <h1> ${meals.title}</h1>
              <p> Servings: ${meals.servings}</p> 
              <p> Ready In: ${meals.readyInMinutes} Minutes</p>
              <a href="${meals.sourceUrl}" class="button">Go to Recipe</a>
          </div>
          `}).join(" ");
      const htmlhld = data.meals.extendedIngredients
      console.log(htmlholder)
      console.log(htmlholder2)
      document.querySelector('#output').insertAdjacentHTML('beforebegin',htmlholder2);
      document.querySelector('#output').insertAdjacentHTML('afterbegin',htmlholder);})
}

function setMealData(data)
{
    return`
        <div class="nutrients">
          <h1>Macros</h1>
          <ul>
            <li>Total Calories: ${data.nutrients.calories}</li>
            <li>Total Carbohydrates: ${data.nutrients.carbohydrates}</li>
            <li>Total Fat: ${data.nutrients.fat}</li>
            <li>Total Protein: ${data.nutrients.protein}</li>
          </ul>
        </div>`;

}
