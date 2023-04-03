import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SideFilterProvider } from "./context/sideFilter_context";
import { CampaignProvider } from "./context/campaign_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const express = require('express')
// const app = express()
// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
root.render(
  <CampaignProvider>
    <SideFilterProvider>
      <App />
    </SideFilterProvider>
  </CampaignProvider>
);
