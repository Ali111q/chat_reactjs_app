import { createSlice } from "@reduxjs/toolkit";

//
import { dispatch } from "../store";

const initialState = {
    sideBar: {
        open:false,
        type:"CONTACT",
    }
}


const slice = createSlice({
    name:"app",
    initialState,
    reducers:{
        toggleSideBar(state, action){
            state.sideBar.open = !state.sideBar.open;
        },
        updateSideBar(state, action){
            state.sideBar.type= action.payload.type;
        }
    }
})

//reducer
export default slice


export function ToggleSideBar(){
    return async ()=>{
        dispatch(slice.actions.toggleSideBar())
    }
}

export function UpdateSideBar(){
    return async ()=>{
        dispatch(slice.actions.updateSideBar(
           
        ))
    }
}