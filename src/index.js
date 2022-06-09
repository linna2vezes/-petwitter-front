import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
import TimeAgo from 'javascript-time-ago';
import pt from 'javascript-time-ago/locale/pt.json'

TimeAgo.addDefaultLocale(pt)
TimeAgo.addLocale(pt)



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
    
      <App />
      
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
