// index.js
import React from "react";
import { createRoot } from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';
import "./index.css";
import App from './App';
registerLicense('ORg4AjUWIQA/Gnt2UVhhQlVFfV5dX2FWfFN0QXNYf1R0fV9GZEwgOX1dQl9gSHxRdURjXXZacHNWQGI=');

const root = createRoot(document.getElementById('root'));
const rootElement = <App />;
root.render(rootElement);
