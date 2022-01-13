import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edituser } from "../../Actions";
import styles from './Edit-customers.module.css';

const UpdateCustomers=()=>{
const users=useSelector(state=>state.users);
const index=useParams().id;
console.log(index);
const temp=users[index];
const [user, setUser]=useState({...temp});
console.log(user);
const change=(e)=>{
    const {name,value} = e.target;
    setUser((prevUser)=>{
        return {...prevUser,[name]:value};
})
}
const navigator=useNavigate()
const dispatch=useDispatch()
const handleClick=(index)=>{
    console.log(index);
     dispatch(edituser(user,index));
navigator('/customers')
     console.log(index);
    
}

    return(
        <div className={styles.edit}>
            <input type="text" name="fullname" value={user.fullname} onChange={change}/>
            <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={change}
          value={user.email}
        />
        <input
          type="number"
          name="phone"
          placeholder="Enter Phone number"
          onChange={change}
          value={user.phone}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={user.address}
          onChange={change}
        />
        <input
          type="number"
          name="aadhar"
          placeholder="Enter Aadhar number"
          value={user.aadhar}
          onChange={change}
        />
        <input
          type="text"
          name="no_of_bedrooms"
          placeholder="Number of bedrooms"
          onChange={change}
          value={user.no_of_bedrooms}
        />
        <input
          type="date"
          placeholder="Checkin date"
          name="checkin_date"
          onChange={change}
          value={user.checkin_date}
        />
        <input
          type="number"
          placeholder="Number of days"
          name="no_of_days"
          onChange={change}
          value={user.no_of_days}
        />
        <button onClick={()=>handleClick(index)}>Update</button>
       </div>
    )
}


export default UpdateCustomers;