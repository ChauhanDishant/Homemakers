import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="920105605454-j139v1hkrcrknpt8c67j6guivohp19bd.apps.googleusercontent.com">
    <React.StrictMode>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
