import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
);
