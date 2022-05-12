function fetching(calories,carbs,fat,protein) {
  fetch('https://api.spoonacular.com/recipes/findByNutrients?maxCalories='+calories+'&maxFat='+fat+'&maxCarbs='+carbs+'&minProtein='+protein+'&random=True'+'&number=5'+'&apiKey=de559a9360ca444db609c4915be035ca&')
  .then(response => response.json())
    .then(data => {
      console.log(data)
      fetchloop(data,data.length)
      })
    
}
function fetchloop(data,datalength)
{
for(let i = 0; i < datalength; i++)
{
  document.getElementById("output").innerHTML += fetchdeeper(data[i])
}
}
function fetchdeeper(data)
{
return`
      <div class="Recipe">
        <ul>
          <li>Title: ${data.title}</li>
          <li>Total Calories: ${data.calories}</li>
          <li>Total Carbohydrates: ${data.carbs}</li>
          <li>Total Fat: ${data.fat}</li>
          <li>Total Protein: ${data.protein}</li>
          <img src = "${data.image}"/> 
          <br>
        </ul>
      </div>`;
}


        
