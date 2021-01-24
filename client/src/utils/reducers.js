import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";


export const reducer = (state, action) => {
    switch (action.type) {

        //If you're reading the branch logs you may have realized this was commented out. Turns out, this is what I need, and went to add, and then it ended up being there, commented out in the base code. Good times.
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };


        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}