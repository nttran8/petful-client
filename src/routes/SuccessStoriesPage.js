import React from "react";
import Header from "../components/Header";
import "./HomePage.css";
import RecentAdoption from "../components/RecentAdoption";

export default function SuccessStoriesPage() {

  let recentAdoptions = () =>{ //<RecentAdoption />
    return <p>Adopt don't shop</p>
  }
  return (
    <>
      <Header />
      <section className="SuccessStoriesPage">
        <h2>Recent Adoptions</h2>
        <ul>
          {recentAdoptions()}
        </ul>
      </section>
    </>
  );
}
