import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider } from '@clerk/clerk-react'

import { ThemeProvider } from "./components/ui/theme-provider.tsx";
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ConvexProvider client={convex}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ConvexProvider>
      </ThemeProvider>
    </ClerkProvider>
  </BrowserRouter>
);
