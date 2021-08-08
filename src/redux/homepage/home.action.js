import { homeActionTypes } from "./home.type";

export const setHomeValues = (values) => ({
  type: homeActionTypes.SET_HOME_VALUES,
  payload: values,
});
