import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/Todos";
import toogleMenuReducer from "../features/general/Togglemenu";
import { taskSclice } from "../features/api/TaskAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categorySclice } from "../features/api/CategoryAPI";

//configure store
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    menu: toogleMenuReducer,
    [taskSclice.reducerPath]: taskSclice.reducer,
    [categorySclice.reducerPath]: categorySclice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      taskSclice.middleware,
      categorySclice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
