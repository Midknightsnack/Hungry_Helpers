import React, { useState } from "react"
import MealList from "./MealList"

function App() {
  const [mealData, setMealData] = useState(null)
  const [maxcalories, setCalories] = useState(2000)
  const [minProtein, setProtein] = useState(30)
  const [maxcarbs, setCarbs] = useState(30)
  const [maxfat, setFat] = useState(30)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?&apiKey=de559a9360ca444db609c4915be035ca&maxCalories=${maxcalories}&minProtein=${minProtein}&maxCarbs=${maxcarbs}&maxFat=${maxfat}&number=5&limitlicense=true`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChangeCalories(e) {
    setCalories(e.target.value)
  }

  function handleChangeProtein(e) {
    setProtein(e.target.value)
  }

  function handleChangeCarbs(e) {
    setCarbs(e.target.value)
  }

  function handleChangeFat(e) {
    setFat(e.target.value)
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder=" Max Calories (e.g. 2000)"
          onChange={handleChangeCalories}
        />
        <input
          type="number"
          placeholder="Min Protein (e.g. 120)"
          onChange={handleChangeProtein}
        />
        <input
          type="number"
          placeholder=" Max Carbs (e.g. 100)"
          onChange={handleChangeCarbs}
        />
        <input
          type="number"
          placeholder=" Max Fat (e.g. 100)"
          onChange={handleChangeFat}
        />
        <button onClick={getMealData}>Get Recipe List</button>
      </section>
      {mealData && <MealList mealData = {mealData}/>}
    </div>
  )
}
  // const [calories, setCalories] = useState(2000)

  // function getMealData() {
  //   fetch(
  //     `https://api.spoonacular.com/mealplanner/generate?apiKey=de559a9360ca444db609c4915be035ca&timeFrame=day&targetCalories=${calories}`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       setMealData(data);
  //       console.log(data);
  //     })
  //     .catch(() => {
  //       console.log("error")
  //     })
  // }

  // function handleChange(e) {
  //   setCalories(e.target.value)
  // }

  // return (
  //   <div className="App">
  //     <section className="controls">
  //       <input
  //         type="number"
  //         placeholder="Calories (e.g. 2000)"
  //         onChange={handleChange}
  //       />
  //       <button onClick={getMealData}>Get Daily Meal Plan</button>
  //     </section>
  //     {mealData && <MealList mealData={mealData} />}
  //   </div>
  // )
//}

export default App