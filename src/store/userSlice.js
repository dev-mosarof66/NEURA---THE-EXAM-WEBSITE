import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
