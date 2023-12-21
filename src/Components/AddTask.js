import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"


const AddTask=()=> {
    const [title,setTitle]= useState('') 
    const dispatch= useDispatch() 


    const handleAdd=()=>{
        dispatch(addTask({title,isDone : false,id : Math.randon()}))  
        setTitle ('')
    
    }

    return (
        <div>   
    <input style={{fontSize:'40px'}} value={title} type="text" onChange={(e)=>setTitle(e.target.value)}/>  
<button style={{margin:'20px', color:'#DE3163', fontSize:'x-large'}}  onClick={()=>handleAdd()}> Add </button> 
        </div>
    )
}


export default AddTask 