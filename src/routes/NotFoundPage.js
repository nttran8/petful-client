import React from "react";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className="NotFoundPage">
        <h2>Oops, this page doesn't exist.</h2>
        <p>Please select any pages from the navigation.</p>
      </section>
    </>
  );
}
