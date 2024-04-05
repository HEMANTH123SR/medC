import dynamic from 'next/dynamic';

const DynamicAreaChart = dynamic(
  () => import('./AreaChart'),
  { ssr: false }
);

export default DynamicAreaChart;