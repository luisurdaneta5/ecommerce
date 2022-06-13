/**
 *
 *
 */
import { types } from "../types/types";

const initialState = {
	items: [],
	coupon: null,
	total: 0,
};

export const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.AddShoppingCart:
			return {
				...state,
				items: [...state.items, action.payload],
				total: state.total + action.payload.price,
			};

		case types.UpdateShoppingCart:
			return {
				...state,
				items: [
					...state.items.map((item) =>
						item.id === action.payload.id ? action.payload : item
					),
				],
				total: state.total + action.payload.price,
			};

		case types.RemoveShoppingCart:
			return {
				...state,
				items: [
					...state.items.map((item) =>
						item.id === action.payload.id ? action.payload : item
					),
				],
				total: state.total - action.payload.price,
			};

		case types.ClearShoppingCart:
			return {
				...state,
				items: state.items.filter(
					(item) => item.id !== action.payload.id
				),
				total: state.total - action.payload.price,
			};

		case types.SetCoupon:
			return {
				...state,
				coupon: action.payload,
			};

		default:
			return state;
	}
};
