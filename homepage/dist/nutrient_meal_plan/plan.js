function fetching(calories, carbs, fat, protein) {
    fetch('https://api.spoonacular.com/recipes/findByNutrients?&apiKey=de559a9360ca444db609c4915be035ca&maxCalories='+calories+'&minProtein='+protein+'&maxCarbs='+carbs+'&maxFat='+fat+'&number=5')
    .then(response => response.json())
      .then(data => {
        console.log(data.insertAdjacentHTML);
        console.log(data.length)
        const htmlholder = data.length.map(data =>{ 
          return `
          <div class= "data">
              <p> Calories: ${data.calories}</p>
              <p> Carbs: ${data.carbs}</p>
              <p> Fat: ${data.fat}</p>
              <p> Protein:${data.protein}>/p>
          </div>
          `}).join(" ");
      console.log(htmlholder)
      document.querySelector('#output').insertAdjacentHTML('afterbegin',htmlholder);})
      
}


        
