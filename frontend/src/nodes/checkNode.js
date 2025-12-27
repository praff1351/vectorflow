import React, { useState } from "react";
import { AbsNode } from "./absNode";

export const CheckNode = ({ id, data }) => {
  const [operation, setOperation] = useState(">");
  return (
    <AbsNode
      title="Evaluator"
      inputs={[{ id: `${id}-a` }, { id: `${id}-b` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <span>Check branch logic </span>

      <label>
        Evaluate:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value=">">&gt;</option>
          <option value="="> = </option>
          <option value="<">&lt;</option>
        </select>
      </label>
    </AbsNode>
  );
};
