import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from '../src/components/Header'
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return <div className="container">
    <Header></Header>
    <Menu></Menu>
    <Footer></Footer>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)