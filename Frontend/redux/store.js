import { configureStore } from "@reduxjs/toolkit";
import errorMessageReducer from "./errorMessage";
import asis from "./asis";

export default configureStore({
    reducer: {
        errorMessage: errorMessageReducer,
        asis: asis,
    },
});
