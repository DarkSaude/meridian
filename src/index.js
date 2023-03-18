import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import "@style/style";


const domNode = document.getElementById('wrapper'),
      root    = createRoot(domNode);  

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);