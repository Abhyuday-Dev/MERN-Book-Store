import React from 'react';

import { useState} from 'react';
import axios from 'axios';
import "./AddBooks.css"


const AddBooks = (props) => {

    const [formData,setFormData] = useState({bookName:"",description:"",image:"",author:"",price:""});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    console.log(formData); 

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/add",formData).then((res)=>alert(res.data.message));

        setFormData({bookName:"",description:"",image:"",author:"",price:""});
    }
   
  return (
    <div className="contact_right">
    <form >
        <h2>Add Book</h2>
<ul>
    <li>
        <label for="name"><span>Name <span class="required-star">*</span></span></label>
        <input type="text" id="name" name="bookName" onChange={handleChange} value={formData.bookName} />
    </li>
    <li>
        <label for="author"><span>Author's Name <span class="required-star">*</span></span></label>
        <input type="text"  name="author" onChange={handleChange} value={formData.author} />
    </li>
    <li>
        <label for="ImageURL"><span>Image URL <span class="required-star">*</span></span></label>
        <input type="text"  name="image" onChange={handleChange} value={formData.image}/>
    </li>
    <li>
        <label for="price"><span>Price <span class="required-star">*</span></span></label>
        <input type=""  name="price" onChange={handleChange} value={formData.price}/>
    </li>
    <li>
        <label for="description"><span>Description <span class="required-star">*</span></span></label>
        <input type="text"  name="description" onChange={handleChange} value={formData.description}/>
    </li>
    <li>
        <input type="submit" onClick={handleSubmit} value="Add Book" />
    </li>
</ul>
</form>
    </div>
  )
}

export default AddBooks;