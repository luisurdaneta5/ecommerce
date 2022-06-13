/**
 *
 *
 */
import { types } from "../types/types";

export const cartAdd = (item) => ({
	type: types.AddShoppingCart,
	payload: item,
});

export const cartUpdate = (item) => ({
	type: types.UpdateShoppingCart,
	payload: item,
});

export const cartRemove = (item) => ({
	type: types.RemoveShoppingCart,
	payload: item,
});

export const cartClear = (item) => ({
	type: types.ClearShoppingCart,
	payload: item,
});

export const cartSetCoupon = (coupon) => ({
	type: types.SetCoupon,
	payload: coupon,
});
