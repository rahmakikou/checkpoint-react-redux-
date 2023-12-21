 
import { ADDTASK,DELETETASK, EDITDONE, CHANGEKIKOU} from "./ActionsTypes"

const InitialState={

tasks: [
    {title: "buy kibbles", isDone: false, id: Math.random()},
    {title: "finish the book", isDone: false, id: Math.random()},
    {title: "meditate", isDone: false, id: Math.random()}  
],
 kikou : "ALL"
}


export const Reducer=(state=InitialState,action)=>{

    switch (action.type) {
        
case ADDTASK : return {...state, tasks :[...state.tasks,action.payload]}
case DELETETASK : return {...state, tasks: state.tasks.filter((el,i,t)=>el.id !== action.payload)}
case EDITDONE : return {...state,tasks: state.tasks.map((el,i,t)=>el.id === action.payload ? {...el,isDone : !el.isDone}: el)}
case CHANGEKIKOU : return {...state, kikou: action.payload}   
    default: return state
            
    }
}

export default Reducer 