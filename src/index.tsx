import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const REACT_APP_PUBLIC_POSTHOG_HOST = "https://peaker.haseab.workers.dev";
const REACT_APP_PUBLIC_POSTHOG_KEY =
  "phc_YuclX6wflAjsUfP2AL8wraPKVnTBPQ26guc1BUynyTH";

const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);

const options = {
  api_host: REACT_APP_PUBLIC_POSTHOG_HOST,
  session_recording: {
    maskAllInputs: false,
  },
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true,
};

posthog.init(REACT_APP_PUBLIC_POSTHOG_KEY, options);

root.render(
  <React.StrictMode>
    <PostHogProvider>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
