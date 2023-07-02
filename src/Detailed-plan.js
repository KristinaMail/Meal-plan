function DeteiledPlan({selectedDay, updateDay}) {

    const editMyMeal=(myInput, value)=>{
        updateDay({...selectedDay, [myInput]:value})
    }


    if(!selectedDay) return <p></p>
    return (
      <div className="container">
       <input onChange={(e)=>editMyMeal("title", e.target.value)}
        className="myInput"
       placeholder="Today is..."
       id="title"
       value={selectedDay.title}/>


       <textarea placeholder="Your meal plan..."
       id="mealForDay"
       value={selectedDay.mealForDay}
       onChange={(e)=>editMyMeal("mealForDay", e.target.value)}/>


       <textarea placeholder="List of ingredients..."
       id="ingredients"
       value={selectedDay.ingredients}
       onChange={(e)=>editMyMeal("ingredients", e.target.value)}
       />
      </div>
    );
  }
  
  export default DeteiledPlan;
  