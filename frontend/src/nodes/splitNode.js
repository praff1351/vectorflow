import React, { useState } from "react";
import { AbsNode } from "./absNode";

export const SplitNode = ({ id, data }) => {
  const [operation, setOperation] = useState("branch");

  return (
    <AbsNode
      title="Splitter"
      inputs={[{ id: `${id}-a` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <span>Split data into branches </span>
      <label>
        Splitter:
        <select value={operation} onChange={(e) => e.target.value}>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </label>
    </AbsNode>
  );
};
