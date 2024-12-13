import Chart from '@/components/charts';
import { chartData } from '@/components/charts/chartData';
import { Card } from '@/components/ui/card';

export default function Home() {
  // const data = [
  //   {
  //     name: 'Jan',
  //     Commercial: 15,
  //     Medicare: 5,
  //     Medicaid: 5,
  //     IFP: 5,
  //   },
  //   { name: 'Feb', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Mar', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Apr', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'May', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Jun', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Jul', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Aug', Commercial: 7, Medicare: 7, Medicaid: 7, IFP: 7 },
  //   { name: 'Sep', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Oct', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Nov', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  //   { name: 'Dec', Commercial: 5, Medicare: 5, Medicaid: 5, IFP: 5 },
  // ];

  // const data = [
  //   {
  //     name: 'Jan',
  //     categories: {
  //       Commercial: {
  //         costSavings: 12000,
  //         volume: 300,
  //         claims: 24,
  //         members: 150,
  //         value: 15,
  //       },
  //       Medicare: {
  //         costSavings: 8000,
  //         volume: 150,
  //         claims: 18,
  //         members: 100,
  //         value: 5,
  //       },
  //       Medicaid: {
  //         costSavings: 5000,
  //         volume: 100,
  //         claims: 12,
  //         members: 75,
  //         value: 5,
  //       },
  //       IFP: {
  //         costSavings: 6000,
  //         volume: 200,
  //         claims: 20,
  //         members: 125,
  //         value: 5,
  //       },
  //     },
  //   },
  // ];

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Avoidance</h2>
      <Chart data={chartData} />
    </Card>
  );
}
