import React from "react";
import "./milligram.min.css";

export default function Layout({ children }) {
  return (
    <main className="container">
      <div className="row">
        <div className="column column-80">{children}</div>
      </div>
    </main>
  );
}
