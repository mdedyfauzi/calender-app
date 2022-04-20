import { createSlice } from '@reduxjs/toolkit';

const calenderSlice = createSlice({
  name: 'calender',

  //create initial state value
  initialState: {
    dates: [
      {
        id: '',
        date: 0,
        first_event: {
          name: 'mandi',
          time: '',
          email: '',
        },
        second_event: {
          name: 'nyuci',
          time: '',
          email: '',
        },
        third_event: {
          name: 'jemur',
          time: '',
          email: '',
        },
      },
    ],
  },

  //create reducers
  reducers: {
    setDates: (state, action) => {
      if ((state.dates.length = 1)) {
        state.dates[0].date = action.payload[0];
        state.dates[0].id = 'day1';

        for (let i = 1; i < action.payload.length; i++) {
          let dates = {
            id: 'day' + (i + 1),
            date: action.payload[i],
          };
          state.dates.push(dates);
        }
        state.isLoading = false;
      }
    },
  },
});

export const { setDates } = calenderSlice.actions;
export default calenderSlice.reducer;
