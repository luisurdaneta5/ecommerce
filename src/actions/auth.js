import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailAndPassword = (email, password) => {
	return async (dispatch) => {
		await dispatch(startLoading());
		dispatch(Login());

		setTimeout(() => {
			dispatch(finishLoading());
		}, 3500);
	};
};

export const Login = () => ({
	type: types.authLogin,
	payload: { uid: "12563", displayName: "Luis Urdaneta" },
});
