import { useState } from "react";
import { Row, Button, Input } from "antd";

function AddFoodForm( {addNewFood}) {
    const [foodName, setFoodName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleFoodName = (event) => setFoodName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value)


    const handleSubmit = (event) => {
        console.log(event)
        // Prevent the page reload (default behavior of the browser)
        event.preventDefault();
        console.log('clicking')
        //Get data from inputs and update
        const newFood = {
            name: foodName,
            image: image,
            calories: calories,
            servings: servings
        }
        console.log(`newFood`, newFood)

        addNewFood(newFood);

        //Clear Inputs
        setFoodName("");
        setImage("");
        setCalories(0);
        setServings(0);
    } 

    return ( 
        <>
        <Row style={{ width: "100%", justifyContent: "center" }}>

        <form onSubmit={handleSubmit}>   
            <label>Name</label>
            <Input value={foodName} type="text" onChange={handleFoodName} />

            <label>Image</label>
            <Input value={image} type="text" onChange={handleImage} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={handleCalories} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServings} />

            <button className="form-btn" type="submit">Create</button>
        </form>
        </Row>
        </>
     );
}

export default AddFoodForm;