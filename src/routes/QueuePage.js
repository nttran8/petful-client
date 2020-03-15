import React from "react";
import Header from "../components/Header";
import Queue from "../components/Queue";


export default function QueuePage() {
  return (
    <>
      <Header />
      <section className="QueuePage">
        <Queue />
      </section>
    </>
  );
}
