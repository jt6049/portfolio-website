import React from "react";
import RecCard from "./RecCard";
import { v4 as uuid } from "uuid";
import { Consumer } from "./context";
function RecommendationStack() {
  return (
    <Consumer>
      {(value) => {
        const { stacks } = value;
        return (
          <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
              {stacks.map((stack) => (
                <RecCard key={uuid()} stack={stack} />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RecommendationStack;
