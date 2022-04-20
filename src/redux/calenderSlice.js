import { createSlice } from '@reduxjs/toolkit';

const calenderSlice = createSlice({
  name: 'calender',

  //create initial state value
  initialState: {
    dates: [
      {
        id: '',
        date: 0,
        event: [],
      },
    ],
    selectedDates: {
      id: '',
      date: 0,
      event: [],
    },
    isOpen: false,
  },

  //create reducers
  reducers: {
    setDates: (state, action) => {
      //If statment created to prevent reducer to be executed twice because the useEffect unintentionally got called twice
      if ((state.dates.length = 1)) {
        state.dates[0].date = action.payload[0];
        state.dates[0].id = 'day1';

        for (let i = 1; i < action.payload.length; i++) {
          let dates = {
            id: 'day' + (i + 1),
            date: action.payload[i],
            event: [],
          };
          state.dates.push(dates);
        }
      }
    },
    setSelectedDates: (state, action) => {
      if (!state.isOpen) {
        state.isOpen = true;
        state.selectedDates.id = action.payload.id;
        state.selectedDates.date = action.payload.date;
        state.selectedDates.event = action.payload.event;
      }
    },
    setEvent: (state, action) => {
      state.setSelectedDates.event.push(action.payload);
    },
  },
});

export const { setDates, setSelectedDates, setEvent } = calenderSlice.actions;
export default calenderSlice.reducer;
