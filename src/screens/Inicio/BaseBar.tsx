import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

const NewBarChart = () => {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

/*  const dataset = [
    { month: 'Jan', seoul: 20 },
    { month: 'Feb', seoul: 45 },
    { month: 'Mar', seoul: 13 },
    { month: 'Apr', seoul: 60 },
    { month: 'May', seoul: 35 },
    { month: 'Jun', seoul: 15 },
  ]; */

  const chartSetting = {
    height: 300,
    width: 900,
    series: series
      .slice(0, seriesNb)
      .map((s) => ({ ...s, data: s.data.slice(0, itemNb) })),
    skipAnimation: skipAnimation,
    colors: ['#5bbec0', '#a6c732', '#b9d162','#afd888', '#ccdd91', '#e0ebc2'], // Cambiar colores aquí
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart {...chartSetting} />
      <FormControlLabel
        checked={skipAnimation}
        control={<Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />}
        label="skipAnimation"
        labelPlacement="end"
      />
      <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
      <Typography id="input-series-number" gutterBottom>
        Number of series
      </Typography>
      <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      />
    </Box>
  );
};

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
} as const;

const series = [
  {
    label: 'bar 1',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
  {
    label: 'bar 2',
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
      910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
  {
    label: 'bar 3',
    data: [
      1145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720, 1057,
      2000, 1716, 2253, 619, 1626, 1209, 1786,
    ],
  },
  {
    label: 'bar 4',
    data: [
      2361, 979, 2430, 1768, 1913, 2342, 1868, 1319, 1038, 2139, 1691, 935, 2262,
      1580, 692, 1559, 1344, 1442, 1593, 1889,
    ],
  },
  {
    label: 'bar 5',
    data: [
      968, 1371, 1381, 1060, 1327, 934, 1779, 1361, 878, 1055, 1737, 2380, 875, 2408,
      1066, 1802, 1442, 1567, 1552, 1742,
    ],
  },
  {
    label: 'bar 6',
    data: [
      2316, 1845, 2057, 1479, 1859, 1015, 1569, 1448, 1354, 1007, 799, 1748, 1454,
      1968, 1129, 1196, 2158, 540, 1482, 880,
    ],
  },

].map((s) => ({ ...s, highlightScope }));

export default NewBarChart;