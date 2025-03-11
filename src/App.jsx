import "./App.css";
import { Button } from "antd";
import { PageLayout } from "./layouts";
import { Route, BrowserRouter as Router } from "react-router";

function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

export default App;
