import "./App.css";
// import { Button } from "antd";
// import { PageLayout } from "./layouts";
// import { Route, BrowserRouter as Router } from "react-router";
import { useEffect } from "react";
import { checkSession, getCookie, redirectToAuth } from "./utils";
import { RouterProvider } from "react-router";
import { router } from "./routes/route";

function App() {
  useEffect(() => {
    checkSession();
    if (sessionStorage.getItem("auth")) return;
    redirectToAuth();
  }, []);

  return (
    <RouterProvider router={router} />
    //   <PageLayout />
    // </RouterProvider>
  );
}

export default App;
