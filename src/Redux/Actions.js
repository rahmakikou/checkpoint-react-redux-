import {ADDTASK, DELETETASK, EDITDONE, CHANGEKIKOU} from './ActionsTypes' 


export const changeKikou=(payload)=>{
    return(
        {
            type: CHANGEKIKOU, 
            payload 
        }
    )
}

export const editDone=(payload)=>{
    return(
        {
            type: EDITDONE,
            payload 
        }
    )
}

export const deleteTask=(payload)=>{
    return(
        {
            type: DELETETASK,
            payload 
        }
    )
}

export const addTask=(payload)=>{
    return(
        {
            type: ADDTASK, 
            payload 
        }
    )
}