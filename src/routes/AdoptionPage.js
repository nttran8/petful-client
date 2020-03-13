import React, { Component } from "react";
import Header from "../components/Header";
import ViewPet from "../components/ViewPet";

export default function AdoptionPage() {
  return (
    <>
      <Header />
      <section className="AdoptionPage">
        <h2>Adopt:</h2>
        <ul>
          <li>
            <ViewPet />
          </li>
        </ul>
      </section>
    </>
  );
}
