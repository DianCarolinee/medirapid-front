import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function StatisticsChart() {
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF", "#9CB9FF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      x: {
        format: "dd MMM yyyy",
      },
    },
    xaxis: {
      type: "category",
      categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      // Añade estas configuraciones para centrar las categorías
      labels: {
        style: {
          fontSize: "12px",
          colors: "#6B7280",
        },
      },
      // Esto ayuda a distribuir uniformemente las categorías
      position: 'center',
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#6B7280"],
        },
      },
      title: {
        text: "",
        style: {
          fontSize: "0px",
        },
      },
    },
    // Añade esta configuración para que el gráfico ocupe todo el espacio disponible
    plotOptions: {
      bar: {
        distributed: true,
      }
    }
  };

  const series = [
    {
      name: "Pacientes",
      data: [180, 170, 170, 160, 175, 165, 170, 182],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Estimación diaria de pacientes
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Siguientes 7 días
          </p>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        {/* Elimina el min-width o ajústalo según necesites */}
        <div className="w-full">
          <Chart options={options} series={series} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}