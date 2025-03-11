import { Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { Agents } from "../pages/agents";
import { Aiagents } from "../pages/aiagents";
import { Developer } from "../pages/developer";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/agents" element={<Agents />} />
    <Route path="/aiagents" element={<Aiagents />} />
    <Route path="/developer" element={<Developer />} />
  </Routes>
);
