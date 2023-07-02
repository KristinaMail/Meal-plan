
import { useEffect, useState } from 'react';
import './App.css';
import DeteiledPlan from './Detailed-plan';
import MyList from './MyList';
import uuid from 'react-uuid';

function App() {

const [mealPlan, setMealPlan]=useState(localStorage.mealPlan ? JSON.parse(localStorage.mealPlan) : []);
const [selectedDay, setSelectedDay] = useState(false)

useEffect(()=>{
  localStorage.setItem("mealPlan", JSON.stringify(mealPlan))
}, [mealPlan])

const addMeal=()=>{
  const newMeal ={
    title: "today is",
    mealForDay : "",
    ingredients: "",
    id: uuid()
  }
  setMealPlan([newMeal, ...mealPlan])
}


const deleteDay=(i)=>{
setMealPlan(mealPlan.filter(({id})=>id !==i))
}

const updateDay =(myUpdateMeal)=>{
const updatedMeals = mealPlan.map((mealPlan)=>{
  if (mealPlan.id ===myUpdateMeal.id){return myUpdateMeal}
  return mealPlan
})
setMealPlan(updatedMeals)
}

const getActiv = () => {
  return mealPlan.find(({id})=>id === selectedDay)
}


  return (
    <div className="App">
      <DeteiledPlan selectedDay={getActiv()} updateDay={updateDay}/>
     <MyList addMeal={addMeal} mealPlan={mealPlan} deleteDay={deleteDay}
     selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
     
    </div>
  );
}

export default App;
