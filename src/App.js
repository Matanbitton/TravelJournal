import React from "react";
import Card from "./components/Card";
import { data } from "./data";
import "./index.css";
import Nav from "./components/Nav";
export default function App() {
  const travelLocations = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="app">
      <Nav />
      <div className="trip">{travelLocations}</div>
    </div>
  );
}
