

function MyList({addMeal, mealPlan, deleteDay,setSelectedDay, selectedDay}) {

  

  return (
    <div className="container">
     <h1>Weekly Meal Plan Ideas</h1>
     <button className="btn" onClick={addMeal}>ADD</button>
     {mealPlan.map(({title, id})=>(
     <div onClick={()=>setSelectedDay(id)} className={`${id===selectedDay ? "selected" : "note"}`}>
      <p>{title}</p>
      <button onClick={()=> deleteDay(id)} className="btn-del">Delete</button>
     </div>))}
    

    </div>
  );
}

export default MyList;
