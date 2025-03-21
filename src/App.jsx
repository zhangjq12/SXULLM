import "./App.css";
import { Button } from "antd";
import { PageLayout } from "./layouts";
import { Route, BrowserRouter as Router } from "react-router";
import { useEffect } from "react";
import { checkSession, getCookie, redirectToAuth } from "./utils";

function App() {
  useEffect(() => {
    checkSession();
    if (sessionStorage.getItem("auth")) return;
    redirectToAuth();
  }, []);

  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

export default App;
