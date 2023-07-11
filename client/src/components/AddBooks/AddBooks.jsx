import React from 'react';

import { useRef,useState} from 'react';

import "./AddBooks.css"


const AddBooks = (props) => {
   
  return (
    <div className="contact_right">
    <form >
        <h2>Add Book</h2>
<ul>
    <li>
        <label for="name"><span>Name <span class="required-star">*</span></span></label>
        <input type="text" id="name" name="name" />
    </li>
    <li>
        <label for="name"><span>Author's Name <span class="required-star">*</span></span></label>
        <input type="text" id="name" name="name" />
    </li>
    <li>
        <label for="mail"><span>Image URL <span class="required-star">*</span></span></label>
        <input type="email" id="mail" name="email"/>
    </li>
    <li>
        <label for="mail"><span>Price <span class="required-star">*</span></span></label>
        <input type="email" id="mail" name="email"/>
    </li>
    <li>
        <label for="mail"><span>Description <span class="required-star">*</span></span></label>
        <input type="email" id="mail" name="email"/>
    </li>
    <li>
        <input type="submit" value="Add Book" />
    </li>
</ul>
</form>
    </div>
  )
}

export default AddBooks;