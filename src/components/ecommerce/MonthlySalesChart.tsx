import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";
import { useState } from "react";

export default function WeeklyUsageChart() {
  const options: ApexOptions = {
    colors: ["#9CB9FF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 375,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%", // Aumentado para barras más anchas
        borderRadius: 5,
        borderRadiusApplication: "end",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Outfit, sans-serif',
        }
      },
      // Centrado de las etiquetas
      position: 'center',
    },
    legend: {
      show: false, // Ocultamos la leyenda para simplificar
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        formatter: (val: number) => Math.floor(val).toString(),
      },
    },
    grid: {
      padding: {
        left: 20,
        right: 20,
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        }
      }
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
    },
  };

  const series = [
    {
      name: "Uso",
      data: [75, 85, 72, 90, 88, 65, 70], // Datos de ejemplo para la semana
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Capacidad de uso semanal
        </h3>
        <div className="relative inline-block">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Ver más
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Eliminar
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[550px] xl:min-w-full pl-2">
          <Chart 
            options={options} 
            series={series} 
            type="bar" 
            height={375}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}