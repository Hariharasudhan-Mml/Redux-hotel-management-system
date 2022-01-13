
import styles from "./User.module.css";
import { deleteUser } from "../../Actions";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import UpdateCustomers from "../../pages/edit-customers/Edit-customers";
import { useState } from "react";


const User = ({user: {fullname,
    address,
    email,
    phone,
    aadhar,
    no_of_bedrooms,
    checkin_date,
    no_of_days
  },index,setEdit,setIndex
}) => {



  const dispatch=useDispatch();
const navigation=useNavigate();
  return (
    fullname ? 
    <div className={styles.user}>

      <h1>{fullname}</h1>
      <p>Email-{email}</p>
      <p>Phone-{phone}</p>
      <p>Aadhar-{aadhar}</p>
      <p>Addres-{address}</p>
      <p>Rooms-{no_of_bedrooms}</p>
      <p>
        {no_of_days} days-<small>{new Date(checkin_date).toLocaleDateString()}</small>
      </p>
      <button className={styles.delete} onClick={()=>dispatch(deleteUser(index))}>Delete</button>
      <button className={styles.edit} onClick={()=>navigation(`/update/${index}`)}>Edit</button>
    </div> : null
  );
};

export default User;
