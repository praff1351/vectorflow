import React from "react";
import { Handle, Position } from "reactflow";

export const AbsNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      {/*Input handle */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}
      <div className="">
        <span className="">{title}</span>
      </div>
      <div className="">{children}</div>
      {/*Output handle */}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};
