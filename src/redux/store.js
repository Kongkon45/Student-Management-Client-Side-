import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "./features/studentsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [studentsApi.reducerPath]: studentsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(studentsApi.middleware)
})

setupListeners(store.dispatch)