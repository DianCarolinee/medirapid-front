import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  // Datos de la tabla de pacientes
  const patientData = [
    { date: "2024-07-29", patients: 110, change: "+10%", capacity: 75 },
    { date: "2024-07-30", patients: 120, change: "+15%", capacity: 85 },
    { date: "2024-07-31", patients: 115, change: "+12%", capacity: 80 },
    { date: "2024-08-01", patients: 105, change: "+5%", capacity: 70 },
    { date: "2024-08-02", patients: 100, change: "0%", capacity: 65 },
    { date: "2024-08-03", patients: 95, change: "-5%", capacity: 60 },
    { date: "2024-08-04", patients: 90, change: "-10%", capacity: 55 },
  ];

// Función para obtener el color según la capacidad
const getCapacityColor = (capacity: number): string => {
  if (capacity >= 80) return 'bg-red-500';
  if (capacity >= 60) return 'bg-yellow-500';
  return 'bg-green-500';
};

  return (
    <>
      <PageMeta
        title="Dashboard | Medi-Rapid"
        description="Dashboard médico con pronóstico de pacientes y capacidad de uso"
      />
      
      {/* Sección de gráficos */}
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-12 space-y-4 xl:col-span-6">
          <StatisticsChart />
        </div>

        <div className="col-span-12 space-y-4 xl:col-span-6">
          <MonthlySalesChart />
        </div>
      </div>

      {/* Sección de la tabla de pacientes */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Pronóstico de Pacientes</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pacientes esperados</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Incremento/Decremento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Capacidad de uso</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-gray-700">
              {patientData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.patients}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                    item.change.startsWith('+') ? 'text-green-600' : 
                    item.change.startsWith('-') ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {item.change}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full mr-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div 
                            className={`h-2.5 rounded-full ${getCapacityColor(item.capacity)}`} 
                            style={{ width: `${item.capacity}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.capacity}%
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}