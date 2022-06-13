import { types } from "../types/types";

const intinitialState = {
	uid: "",
	name: "",
	checking: true,
};

export const authReducer = (state = intinitialState, action) => {
	switch (action.type) {
		case types.authLogin:
			return {
				...state,
				uid: action.payload.uid,
				name: action.payload.displayName,
				checking: false,
			};

		default:
			return state;
	}
};
