// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { AbsNode } from "./absNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <AbsNode title="Text" inputs={[]} outputs={[{ id: `${id}-output` }]}>
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>
    </AbsNode>
  );
};
