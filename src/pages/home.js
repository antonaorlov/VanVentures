import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>VanVenture Awaits: </h1>
      <h1>Unleash the Explorer Within</h1>
      <p>Hit the Road, Find Your Soul: Embrace the Van Life Adventure</p>

      <Link to="vans">Find your van</Link>
    </div>
  );
}
