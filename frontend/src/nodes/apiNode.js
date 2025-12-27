import React, { useState } from "react";
import { AbsNode } from "./absNode";

export const ApiNode = ({ id, data }) => {
  const [method, setMethod] = useState("GET");
  return (
    <AbsNode
      title="API"
      inputs={[{ id: `${id}-method` }]}
      outputs={[{ id: `${id}-response` }, { id: `${id}-error` }]}
    >
      <span>Fetch data from an API </span>

      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </AbsNode>
  );
};
