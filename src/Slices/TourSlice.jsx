import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
    name: "tours",
    initialState: {
        tours: [],
        filteredTours: [], // Filtered tours
        currentTourId: null,  // Add this line
    },
    reducers: {
        setTours: (state, action) => {
            state.tours = action.payload;
            state.filteredTours = action.payload;
        },
        setCurrentTourId(state, action) {
            state.currentTourId = action.payload;  // Update this line
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
        },
        addReview: (state, action) => {
            const { tourId, review } = action.payload;
            const tour = state.tours.find(tour => tour._id === tourId);
        
            if (tour) {
                if (!Array.isArray(tour.reviews)) {
                    tour.reviews = [];
                }
                tour.reviews.push(review);
            }
        },
        setReview: (state, action) => {
            const { tourId, content, reviewId } = action.payload;
        
            // Find the tour by its ID
            const tour = state.tours.find(tour => tour._id === tourId);
            if (tour) {
                // Find the review by its ID
                const review = tour.reviews.find(review => review._id === reviewId);
        
                if (review) {
                    // Update the review content
                    review.content = content;
                } else {
                    console.error(`Review with ID ${reviewId} not found in tour ${tourId}`);
                }
            } else {
                console.error(`Tour with ID ${tourId} not found`);
            }
        },
        deleteReview: (state, action) => {
            const { tourId, reviewId } = action.payload;

            // Find the tour by its ID
            const tour = state.tours.find(tour => tour._id === tourId);
            
            if (tour) {
                // Remove the review from the reviews array
                const initialLength = tour.reviews.length;
                tour.reviews = tour.reviews.filter(review => review._id !== reviewId);

                if (tour.reviews.length === initialLength) {
                    console.error(`Review with ID ${reviewId} not found in tour ${tourId}`);
                }
            } else {
                console.error(`Tour with ID ${tourId} not found`);
            }
        }
        
    }
})

export const { setTours,setCurrentTourId, filterTours, resetFilteredTours, filterToursBySearch, addReview, setReview ,deleteReview} = tourSlice.actions;
export default tourSlice.reducer;