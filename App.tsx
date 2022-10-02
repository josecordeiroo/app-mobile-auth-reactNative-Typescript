import React from "react";
import { Router } from "./src/routes/router";

import { AuthProvider } from "./src/contexts/Auth";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
