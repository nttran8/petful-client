import React from "react";
import { Route, Switch } from "react-router-dom";

import AdoptionPage from "../routes/AdoptionPage";
import HomePage from "../routes/HomePage";
import QueuePage from "../routes/QueuePage";
import SuccessStoriesPage from "../routes/SuccessStoriesPage";
import NotFoundPage from "../routes/NotFoundPage";
import UserProvider from "../context";

function Root() {
  return (
    <main className="Root">
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <HomePage addToQueue={() => history.push("/queue")} />
          )}
        />
        <Route path="/adoption" component={AdoptionPage} />
        <Route path="/queue" component={QueuePage} />
        <Route path="/successstories" component={SuccessStoriesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>
  );
}

export default Root;
