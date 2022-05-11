
function fetching(calories) {
    fetch('https://api.spoonacular.com/mealplanner/generate?apiKey=de559a9360ca444db609c4915be035ca&timeFrame=day&targetCalories='+calories,)
        .then(response => response.json())
      .then(data => {
        console.log(data);
        setMealData(data)
        const htmlholder = data.meals.map(meals =>{ 
          return `
          <div id = "wrapper>
            <section className="meals">
              <article>
              <ul className="instructions">
                  <h1> ${meals.title}</h1>
                  <p> Servings: ${meals.servings}</p>
                  <p> Ready In: ${meals.readyInMinutes} Minutes</p>
                  <a href=${meals.sourceUrl}>Go to Recipe</a>
              </ul>
          </article>
          </section>
          </div>
          `}).join(" ");
      const htmlhld = data.meals.extendedIngredients
      console.log(htmlholder)
      document.querySelector('#output').insertAdjacentHTML('afterbegin',htmlholder);})
      
}

function setMealData(data)
{
    return`
        <div class="nutrients">
          <h1>Macros</h1>
          <ul>
            <li>Calories: ${data.title}</li>
            <li>Carbohydrates: ${data.nutrients.carbohydrates}</li>
            <li>Fat: ${data.nutrients.fat}</li>
            <li>Protein: ${data.nutrients.protein}</li>
          </ul>
        </div>`;

}
