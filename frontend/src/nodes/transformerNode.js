import React, { useState } from "react";
import { AbsNode } from "./absNode";

export const TransformerNode = ({ id, data }) => {
  const [operation, setOperation] = useState("uppercase");
  return (
    <AbsNode
      title="Transformer"
      inputs={[{ id: `${id}-a` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <span>Modify data format </span>
      <label>
        Transform:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
        </select>
      </label>
    </AbsNode>
  );
};
