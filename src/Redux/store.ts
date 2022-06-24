import { configureStore } from "@reduxjs/toolkit";
import BlogSlicer from "./blogSlicer";

const store = configureStore({
  reducer: {
    BlogSlicer: BlogSlicer,
  },
});

export default store;
