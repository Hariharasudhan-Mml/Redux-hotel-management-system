

const initial_state={
users:[]
};

const Reducer=(state=initial_state, action)=>{
switch(action.type){
case "ADD_USER":
    return{
        users:[...state.users,action.payload]
    }
    case "DELETE_USER":
        return{
     users:state.users.map((user,index)=>{
         return index !== action.payload
     }
     )
    }
    case "EDIT_USER":
        console.log( { users:state.users[action.index]={...action.payload}});
        return{
            users:[state.users[action.index]={...action.payload}]
        }

default:
    return state
}

}


export  default Reducer;