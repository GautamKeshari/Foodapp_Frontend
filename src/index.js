import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.js";
import AuthProvider from "./contexts/AuthProvider.js";


// tanstack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient= new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
