import React from "react";
import { useParams } from "react-router-dom";
import Discuss from "./Discussion";
const LanguagePage = () => {
  const { name } = useParams();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the {name} Community</h1>
        <p className="text-lg text-muted-foreground">
          Discuss, share, and grow your knowledge about {name} with millions of developers.
        </p>
        <Discuss channelName={name}/>
      </div>
    </section>
  );
};

export default LanguagePage;
