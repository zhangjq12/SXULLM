import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
import { Agents } from "../pages/agents";
import { Aiagents } from "../pages/aiagents";
import { Developer } from "../pages/developer";
import { PageLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "agents",
        Component: Agents
      },
      {
        path: "aiagents",
        Component: Aiagents
      },
      {
        path: "developer",
        Component: Developer
      },
    ],
  }
])

// export const AppRoutes = () => (
//   // <Routes>
//   //   <Route path="/" element={<Home />} />
//   //   <Route path="/agents" element={<Agents />} />
//   //   <Route path="/aiagents" element={<Aiagents />} />
//   //   <Route path="/developer" element={<Developer />} />
//   // </Routes>
//   <RouterProvider router={router} />
// );
