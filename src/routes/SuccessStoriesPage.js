import React from "react";
import Header from "../components/Header";
import "./HomePage.css";
import RecentAdoption from "../components/RecentAdoption";

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <section className="SuccessStoriesPage">
        <h2>Recent Adoptions</h2>
        <li>
          <RecentAdoption />
        </li>
      </section>
    </>
  );
}