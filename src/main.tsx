import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function Index() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Index</h1>
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>About</h1>
    </main>
  );
}

function Contact() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h1>Contact</h1>
    </main>
  );
}
