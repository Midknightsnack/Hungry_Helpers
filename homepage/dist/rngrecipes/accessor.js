function fetching() {
    fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=e0ff813cc4694393a86343962f85cdf4')
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