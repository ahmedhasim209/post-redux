import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Ahmed Hashim" },
  { id: "2", name: "Farouq Daif" },
  { id: "3", name: "Ali Ellakany" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
