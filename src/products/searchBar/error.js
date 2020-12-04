import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageWrapper from "./PageWrapper";

const ErrorDiv = () => {
  const text = `Wygląda na to, że nie mamy tego przepisu:(`;

  return (
    <Router>
      <PageWrapper title={text}>
        <h1>Pomóż nam rozwijać naszą apkę i dodaj go!</h1>
      </PageWrapper>
    </Router>
  );
};

export default ErrorDiv;
