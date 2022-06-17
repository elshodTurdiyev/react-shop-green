import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import Root from "./root";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
