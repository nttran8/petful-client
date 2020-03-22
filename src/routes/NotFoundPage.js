import React from "react";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className="NotFoundPage">
        <h1>Oops, this page doesn't exist.</h1>
        <p>Please select any pages from the navigation.</p>
      </section>
    </>
  );
}
