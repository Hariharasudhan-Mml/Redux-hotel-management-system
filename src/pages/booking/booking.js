import { setUser } from "../../Actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {store} from '../../index';
import styles from './booking.module.css';

const Book=()=>{
const [input, setInput] = useState({
        fullname: "",
        email: "",
        phone: "",
        aadhar: "",
        address: "",
        no_of_bedrooms: "",
        checkin_date: "",
        no_of_days: "",
      });
      const change = (e) => {
        const { name, value } = e.target;
        setInput((prevUser) => {
          return { ...prevUser, [name]: value };
        });
      };
    console.log(input)
     
const dispatch=useDispatch();

const handleClick=()=>{
  if(!input.fullname.trim() || !input.email.trim() || !input.aadhar.trim() || !input.address.trim() || !input.checkin_date.trim() || !input.no_of_bedrooms.trim() || !input.no_of_days.trim()){
    return alert('please enter all the details');
  }
    dispatch(setUser(input));
    console.log(input)
    console.log(store.getState());
    setInput({
      fullname: "",
      email: "",
      phone: "",
      aadhar: "",
      address: "",
      no_of_bedrooms: "",
      checkin_date: "",
      no_of_days: "",
    });
  }
    return (
        <div className={styles.booking}>
          <h2 >Hello, Admin </h2>
      <h4>Enter details to Book a room</h4>
             <div className={styles.form}>
        <input
          type="text"
          placeholder="Enter FullName"
          name="fullname"
          value={input.fullname}
          onChange={change}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={change}
          value={input.email}
        />
        <input
          type="number"
          name="phone"
          placeholder="Enter Phone number"
          onChange={change}
          value={input.phone}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={input.address}
          onChange={change}
        />
        <input
          type="number"
          name="aadhar"
          placeholder="Enter Aadhar number"
          value={input.aadhar}
          onChange={change}
        />
        <input
          type="text"
          name="no_of_bedrooms"
          placeholder="Number of bedrooms"
          onChange={change}
          value={input.no_of_bedrooms}
        />
        <input
          type="date"
          placeholder="Checkin date"
          name="checkin_date"
          onChange={change}
          value={input.checkin_date}
        />
        <input
          type="number"
          placeholder="Number of days"
          name="no_of_days"
          onChange={change}
          value={input.no_of_days}
        />

        <button onClick={handleClick}>Book</button>
      </div>
        </div>
    )
}


export default Book;