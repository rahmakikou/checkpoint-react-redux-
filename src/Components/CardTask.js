import { useDispatch } from "react-redux"
import { deleteTask, editDone } from "../Redux/Actions"


const CardTask=({el})=> {
    const dispatch = useDispatch()
    return (
        <div>
            <br/> 
            <br/> 
        <h2 style={{fontSize:'50px', textDecoration:'Background'}} className={el.isDone && "Barred"}>{el.title} </h2> 
        <h3 style={{color:'coral', fontSize:'30px'}}>{el.isDone ? "TRUE" : "FALSE"}</h3> 
          
    <button style={{margin:'20px', color:'#C9A9A6', fontSize:'x-large'}} onClick={()=>dispatch(editDone(el.id))}>Done</button>
    <button  style={{margin:'20px', color:'#C9A9A6', fontSize:'x-large'}} onClick={()=>dispatch(deleteTask(el.id))}>Delete</button>  
        </div>
    )
}


export default CardTask 