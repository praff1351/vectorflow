import React, { useState } from "react";
import { AbsNode } from "./absNode";

export const CalcNode = ({ id, data }) => {
  const [operation, setOperation] = useState("+");

  return (
    <AbsNode
      title="Calculator"
      inputs={[{ id: `${id}-a` }, { id: `${id}-b` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <span>Perform basic calculations </span>
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
    </AbsNode>
  );
};
