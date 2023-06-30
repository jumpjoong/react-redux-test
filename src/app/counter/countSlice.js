import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
    num: 1,
  },
  reducers: {
    plus(state) {
      //state는 initialState를 가르키는거 같음
      state.value += 1;
    },
    minus: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.num += 1;
      //state.value는 init value가 변한 값
      //action.payload는 인자로 받아온 값
      //action.type(name에 있는 count/incrementByAmount)은 자기를 가르킴 그래서 쓸 일이 없을거 같음
    },
  },
});

export const {plus, minus, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;