import { PieChart } from '@mui/x-charts/PieChart';

export default function BasePie() {
  return (
    <PieChart
        colors={['#5bbec0', '#a6c732', '#b9d162','#afd888', '#ccdd91', '#e0ebc2']} 
      series={[
        {
          data: [
            { id: 0, value: 20, label: 'bar 1' },
            { id: 1, value: 50, label: 'bar 2' },
            { id: 3, value: 30, label: 'bar 3' },
            { id: 4, value: 40, label: 'bar 4' },
            { id: 5, value: 10, label: 'bar 5' },
            { id: 6, value: 60, label: 'bar 6' },
          ],
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
      width={400}
      height={300}
    />
  );
}
