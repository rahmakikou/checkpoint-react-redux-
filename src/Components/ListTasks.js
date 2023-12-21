import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react" 
 

const ListTasks=()=> {
    const tasks= useSelector(state=>state.tasks)  
    const kikou = useSelector(state=>state.kikou)

    return ( 
        <div style={{color: 'purple', fontFamily: 'fantasy', fontSize:'50px'}}>
            
            {
               kikou === "ALL" ? 
                tasks.map((el,i,t)=> <CardTask el={el}/>) 
                :
                kikou === "DONE" ? 
                tasks.filter((el,i,t)=> el.isDone === true).map((el,i,t)=><CardTask el={el}/>)
            :
            tasks.filter((el,i,t)=> el.isDone === false).map((el,i,t)=> <CardTask el={el}/>)
            }

             
        </div>
    )
}


export default ListTasks 