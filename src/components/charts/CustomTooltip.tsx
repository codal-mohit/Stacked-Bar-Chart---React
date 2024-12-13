import React from 'react';

interface CategoryData {
  costSavings: number;
  volume: number;
  claims: number;
  members: number;
  value: number;
}

interface PayloadItem {
  name: string;
  value: number;
  color?: string;
  dataKey?: string;
  categories?: {
    Commercial?: CategoryData;
    Medicare?: CategoryData;
    Medicaid?: CategoryData;
    IFP?: CategoryData;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: PayloadItem[];
  hoverStack: string;
}

const CustomTooltip = (props: CustomTooltipProps) => {
  const { active, payload, hoverStack } = props;

  if (!active || !payload || payload.length === 0) return null;

  const data = payload.find((item) => item.dataKey === hoverStack);

  if (!data) return null;

  return (
    <div className="bg-white border border-gray-200 p-4 shadow-md rounded-md w-60">
      <div className="flex items-center border-b pb-3">
        <div
          className="h-4 w-4 shrink-0 mr-2 rounded"
          style={{ backgroundColor: data.color }}
        />
        <p className="font-semibold text-sm">{data.name}</p>
      </div>
      <div className="pt-3">
        <div className="flex items-center justify-between">
          <span className="font-normal text-xs">Total Cost Savings</span>
          <span className="font-semibold text-sm">$00,000</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-normal text-xs">Total Volume</span>
          <span className="font-semibold text-sm">100</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-normal text-xs">Total Claims</span>
          <span className="font-semibold text-sm">24</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-normal text-xs">Total Members</span>
          <span className="font-semibold text-sm">24</span>
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
