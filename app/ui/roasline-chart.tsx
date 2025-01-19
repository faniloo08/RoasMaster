import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ROASLineChartProps {
  roasData: number[]; // This array will include both the current ROAS and future projections
}

const ROASLineChart = ({ roasData }: ROASLineChartProps) => {
  const labels = ["Current", "Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]; // Labels for each point in time
  
  const data = {
    labels,
    datasets: [
      {
        label: "ROAS Over Time",
        data: roasData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        tension: 0.1, // For smooth curves
      },
      {
        label: "ROAS Norm",
        data: new Array(roasData.length).fill(4.0), // Constant line at the norm
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderDash: [10, 5], // Dashed line to indicate it's a reference/norm
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...roasData, 4.0) + 1, // Scale the y-axis to fit data + a bit of space
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // Explicitly define the position as a constant to satisfy TypeScript
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ROASLineChart;