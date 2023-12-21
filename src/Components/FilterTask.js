import { useDispatch } from "react-redux"
import { changeKikou } from "../Redux/Actions"


const FilterTask=()=> {
    const dispatch = useDispatch()
    return (
        <div>
<button style={{margin:'20px', color:'magenta', fontSize:'40px'}} onClick={()=>dispatch(changeKikou('ALL'))}> All</button>
<button style={{margin:'20px', color:'magenta' , fontSize:'40px'}} onClick={()=> dispatch(changeKikou("DONE"))}> Done</button>
<button style={{margin:'20px', color:'magenta', fontSize:'40px'}} onClick={()=>dispatch(changeKikou('NOTDONE'))}> Not Done</button> 
             
        </div>
    )
} 


export default FilterTask 