// llmNode.js

import { Handle, Position } from "reactflow";
import { AbsNode } from "./absNode";

export const LLMNode = ({ id, data }) => {
  return (
    <AbsNode
      title="LLM"
      inputs={[{ id: `${id}-system` }, { id: `${id}-prompt` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <span>LLM: </span>

      <span>This is a LLM.</span>
    </AbsNode>
  );
};
