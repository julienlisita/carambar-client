// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";

function App() {

  return (
    <Router basename="/carambar-client">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
    </Router>
  )
}

export default App
