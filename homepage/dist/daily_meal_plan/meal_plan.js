function fetching() {
    fetch('https://api.spoonacular.com/recipes/findByNutrients?&apiKey=de559a9360ca444db609c4915be035ca&maxCalories=${maxcalories}&minProtein=${minProtein}&maxCarbs=${maxcarbs}&maxFat=${maxfat}&number=5&limitlicense=true')
    .then(response => {
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();})
    .then(data => {
        console.log(data.recipes); 
        const htmlholder = data.recipes.map(recipe =>{ 
            return `
            <div class= "recipe">
                <p> Title: ${recipe.title}</p>
                <p><img src = "${recipe.image}"/></p>
                <p> Price Per Serving: $${recipe.pricePerServing}</p>
                <p> Servings: ${recipe.servings}</p>
                <p> Summary: ${recipe.summary}</p>
                <p> Instructions: ${recipe.instructions}</p>
                <p> URL: ${recipe.sourceUrl}
            </div>
            `}).join(" ");
        const htmlhld = data.recipes.extendedIngredients
        console.log(htmlholder)
        document.querySelector('#output').insertAdjacentHTML('afterbegin',htmlholder);})
    .catch(error =>  {console.log(error);});
}