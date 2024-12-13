import React from 'react';
import { LabelProps } from 'recharts';

const StackedLabel = (props: LabelProps) => {
  const { x, y, width, value, height } = props;

  if (!x || !y || !width || !height) return null;

  return (
    <text
      x={+x + +width / 2}
      y={+y + +height / 1.75}
      textAnchor="middle"
      fill="#fff"
      fontSize={14}
      fontWeight={600}
    >
      {value}M
    </text>
  );
};

export default StackedLabel;
