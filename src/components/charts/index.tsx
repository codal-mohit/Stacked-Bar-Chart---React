'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import CustomTooltip from '@/components/charts/CustomTooltip';
import { useState } from 'react';
import StackedLabel from '@/components/charts/StackedLabel';

interface CategoryData {
  costSavings: number;
  volume: number;
  claims: number;
  members: number;
  value: number;
}

interface Props {
  data: {
    name: string;
    categories: {
      Commercial: CategoryData;
      Medicare: CategoryData;
      Medicaid: CategoryData;
      IFP: CategoryData;
    };
  }[];
}

const transformData = (data: Props['data']) => {
  return data.map((item) => {
    return {
      name: item.name,
      Commercial: item.categories.Commercial.value,
      Medicare: item.categories.Medicare.value,
      Medicaid: item.categories.Medicaid.value,
      IFP: item.categories.IFP.value,
    };
  });
};

export default function Chart(props: Readonly<Props>) {
  const { data } = props;
  const transformedChartData = transformData(data);
  const [currentStack, setCurrentStack] = useState('');

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={transformedChartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="#ccc"
          strokeDasharray="none"
        />
        <XAxis dataKey="name" strokeWidth={0} />
        <YAxis strokeWidth={0} />
        <Tooltip
          content={<CustomTooltip hoverStack={currentStack} />}
          cursor={{ fill: 'transparent' }}
        />

        <Legend iconSize={16} fontSize={14} wrapperStyle={{ paddingTop: 24 }} />

        <Bar
          dataKey="Commercial"
          stackId="a"
          fill="#71A338"
          radius={[4, 4, 4, 4]}
          stroke="white"
          strokeWidth={2}
          className="cursor-pointer"
          onMouseOver={() => setCurrentStack('Commercial')}
        >
          <LabelList content={StackedLabel} />
        </Bar>

        <Bar
          dataKey="Medicare"
          stackId="a"
          fill="#646464"
          stroke="white"
          strokeWidth={2}
          radius={[4, 4, 4, 4]}
          className="cursor-pointer"
          onMouseOver={() => setCurrentStack('Medicare')}
        >
          <LabelList content={StackedLabel} />
        </Bar>

        <Bar
          dataKey="Medicaid"
          stackId="a"
          fill="#4AA48F"
          stroke="white"
          strokeWidth={2}
          radius={[4, 4, 4, 4]}
          className="cursor-pointer"
          onMouseOver={() => setCurrentStack('Medicaid')}
        >
          <LabelList content={StackedLabel} />
        </Bar>

        <Bar
          dataKey="IFP"
          stackId="a"
          fill="#204A87"
          stroke="white"
          strokeWidth={2}
          radius={[4, 4, 4, 4]}
          className="cursor-pointer"
          onMouseOver={() => setCurrentStack('IFP')}
        >
          <LabelList content={StackedLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
