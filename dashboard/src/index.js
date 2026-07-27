import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ClerkProvider } from "@clerk/react";

import "./index.css";

import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";


const clerkPublishableKey =
process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;


const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  <React.StrictMode>

    <ClerkProvider publishableKey={clerkPublishableKey}>

      <BrowserRouter>

        <Routes>

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </ClerkProvider>

  </React.StrictMode>
);