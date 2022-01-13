

export const setUser=(user)=>{
    return {
type:"ADD_USER",
payload:user
    }
}

export const deleteUser=(user)=>{
    return{
        type:"DELETE_USER",
        payload:user
    }
}

export const edituser=(user,index)=>{
    return {
        type:"EDIT_USER",
  index:index,
        payload:user
    }
}