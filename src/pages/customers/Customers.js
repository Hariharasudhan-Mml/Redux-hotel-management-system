import {useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import User from '../../components/User/User';
import UpdateCustomers from '../edit-customers/Edit-customers';

const Customers=()=>{
const users=useSelector(state=>state.users);
console.log('customers route',users);
    return(
        <div>
          {  users.map((user,index)=>{
 return <User user={user} key={index}  index={index}/>
            })   }
        </div>
    )
}


export default Customers;