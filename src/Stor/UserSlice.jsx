import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    name: "אורח",
    email: "",
    password:"",
    gender:""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        createUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password    
            state.gender=action.payload.gender 
           }
    }

})

export const {createUser} = userSlice.actions
export default userSlice.reducer