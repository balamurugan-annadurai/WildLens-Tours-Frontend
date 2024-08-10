import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
    name: "tours",
    initialState: {
        tours: [],
        filteredTours: [] // Filtered tours
    },
    reducers: {
        setTours: (state, action) => {
            state.tours = action.payload;
            state.filteredTours = action.payload;
        },
        resetFilteredTours: (state, action) => {
            state.filteredTours = state.tours;
        },
        filterTours: (state, action) => {
            const filter = action.payload;
            if (filter === "all") {
                state.filteredTours = state.tours;
            } else {
                state.filteredTours = state.tours.filter(tour => 
                    tour.price === filter || 
                    tour.duration === filter || 
                    tour.country === filter
                )
            }
        },
        filterToursBySearch: (state, action) => {
            state.filteredTours = state.tours.filter(tour => (
                tour.name.toLowerCase().indexOf(action.payload.toLowerCase()) != -1
            ))
        }
    }
})

export const { setTours,filterTours,resetFilteredTours,filterToursBySearch } = tourSlice.actions;
export default tourSlice.reducer;