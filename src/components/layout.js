import React from "react";
import "./milligram.min.css";

export default function Layout({ children }) {
  return (
    <main className="container">
      <div className="row">
        <div className="column">{children}</div>
      </div>
    </main>
  );
}
