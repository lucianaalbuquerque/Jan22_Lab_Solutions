import { useState } from "react";
import { Row, Divider, Input } from "antd";

function SearchFood({searchFoodList}) {
    const [searchString, setSearchString] = useState("");

    const handleSearch = (event) => {
        //setSearchString({ $regex: event.target.value, $options: 'i' })
        console.log(event.target.value);
        
        setSearchString(event.target.value);

        searchFoodList(event.target.value);
    }

    return ( 
        <>
            <Divider><h2>Search Food</h2></Divider>
            <Input value={searchString} placeholder="Enter search query" type="text" onChange={handleSearch} />
        </>
     );
}


export default SearchFood;