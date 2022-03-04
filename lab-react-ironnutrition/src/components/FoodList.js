import { useState } from 'react';
import foodsJson from "../foods.json";
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchFood from './SearchFood';
import { Row, Divider, Button } from "antd";


function FoodList() {
    //master array of Foods
    const [allFoods, setAllFoods] = useState(foodsJson)
    //rendered array of Foods
    const [foods, setFoods] = useState(foodsJson)
    //toggle button state
    const [isFormShowing, setIsFormShowing] = useState(false);
    //rendered list state
    const [isFoodArrEmpty, setIsFoodArrEmpty] = useState(false);

    //Function - add new food from AddFoodForm.js
    const addNewFood = (foodObj) => {
    //update the array of rendered foods
    const updatedFoods = [foodObj, ...foods];
    
    //update master array of foods
    const updatedAllFoods = [foodObj, ...allFoods]

    //Update the state
    setFoods(updatedFoods);
    setAllFoods(updatedAllFoods);   

}

    //Function - delete food from FoodBox.js > delete button
    const deleteFood = (foodName) => {
        
        const filteredFoods = foods.filter(food => {
            return food.name !== foodName;
        })

        if(filteredFoods.length === 0) {
            setIsFoodArrEmpty(true);
        }

        setFoods(filteredFoods);
        console.log(`foodObj Deleting`, foodName);
    }

    //Function - search foods from SearchFood,js
    const searchFoodList = (queryString) => {
        let searchedFoods = allFoods.filter((food) => {
            return food.name.toLowerCase().includes(queryString.toLowerCase());
        })

        if(searchedFoods.length === 0) {
            setIsFoodArrEmpty(true);
        }

        setFoods(searchedFoods);
       
    }

    //Toggle Form
    const toggleAddForm = () => {
        setIsFormShowing(!isFormShowing);
    }

    return (
        <>
        <Divider><h2>Add a New Food</h2></Divider>
        {isFormShowing && <AddFoodForm addNewFood={addNewFood}/>}

        <Button onClick={toggleAddForm}>
            {isFormShowing ? "Hide Form" : "Show Form"}
        </Button>

        <SearchFood searchFoodList={searchFoodList}/>

        <Divider><h2>Food List</h2></Divider>

        <Row gutter={[5, 30]} style={{ width: "100%"}}>

        {isFoodArrEmpty ? 
        
        <p>Oppssss! No food here</p> 
        
        : foods.map(food => {
            return (
                <FoodBox key={food.name+food.calories} foodObj={food} deleteFood={deleteFood}/>
            )
        })
        }
        </Row>
        </>
     );
}

export default FoodList;

