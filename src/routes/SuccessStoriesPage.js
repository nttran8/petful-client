import React from "react";
import Header from "../components/Header";
import RecentAdoption from "../components/RecentAdoption";

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <section className="SuccessStoriesPage">
        <h2>Congratulations for finding a home!</h2>
        <RecentAdoption />
      </section>
    </>
  );
}
