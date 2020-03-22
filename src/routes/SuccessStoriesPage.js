import React from "react";
import Header from "../components/Header";
import RecentAdoption from "../components/RecentAdoption";

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <section className="SuccessStoriesPage">
        <h1>Congratulations for finding a home!</h1>
        <RecentAdoption />
      </section>
    </>
  );
}
