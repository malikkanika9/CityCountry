import React, { useEffect, useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/action";
import axios from "axios";

const AddCity = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        city: "",
        country: "",
        population: "",
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const getData =() => {
            axios.get("http://localhost:8080/countries").then((res)=>{
console.log(res.data)
setData(res.data  );
            })};

        getData();
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addCity(formData));
    };

    return (
        <FormControl>
            <h2>Add City</h2>
            <TextField
                label="Enter City Name"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
                id="city"
                onChange={handleChange}
            />
            <TextField
                label="Enter Population"
                variant="outlined"
                sx={{ marginBottom: "20px" }}
                id="population"
                onChange={handleChange}
            />
     <select style={{ height: "55px",borderRadius: "3px", fontSize: "17px", color: "grey", paddingLeft: "10px", marginBottom: "30px",  }}   id="country"
  onChange={handleChange} >
        <option value="">Select Country</option>
 {data.map((e) => {
  return (
 <option key={e.id} value={e.name}>   {e.name} </option> ); })}
            </select>

  <Button onClick={handleSubmit} sx={{ height: "50px" }} variant="contained">
                Add
            </Button>
        </FormControl>
    );
};

export default AddCity