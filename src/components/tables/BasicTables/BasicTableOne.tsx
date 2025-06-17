import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Link } from "react-router";
import Badge from "../../ui/badge/Badge";
import { usePacientes } from "../../../context/PacientesContext"; // Asegúrate de que la ruta sea correcta

// La interfaz Paciente debería ser la misma que en PacientesContext.tsx
interface Paciente {
  id: number;
  apellidoPaterno: string;
  apellidoMaterno: string;
  sexo: string;
  edad: number;
  nivelTriaje: string;
  frecuencia_cardiaca: number;
  presionArterial: string;
  spO2: number;
  temperatura: number;
  fechaRegistro: string;
}

export default function TablaRegistrosMedicos() {
  const { pacientes } = usePacientes(); // Obtén los pacientes del contexto

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Encabezado de la tabla */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Apellido Paterno
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Apellido Materno
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Sexo
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Edad
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Nivel Triaje
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Frec. Cardíaca
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Presión
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                SpO2
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Temp. (°C)
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Fecha Registro
              </TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Acciones
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Cuerpo de la tabla */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {pacientes.map((paciente) => (
              <TableRow key={paciente.id}> {/* Usa paciente.id como key */}
                <TableCell className="px-5 py-4 sm:px-6 text-start font-medium text-gray-800 dark:text-white/90">
                  {paciente.apellidoPaterno}
                </TableCell>
                <TableCell className="px-5 py-4 sm:px-6 text-start text-gray-800 dark:text-white/90">
                  {paciente.apellidoMaterno}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.sexo}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.edad}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <Badge
                    size="sm"
                    color={
                      paciente.nivelTriaje === "Urgente"
                        ? "error"
                        : paciente.nivelTriaje === "Emergencia"
                        ? "error"
                        : paciente.nivelTriaje === "Prioritario"
                        ? "warning"
                        : "success"
                    }
                  >
                    {paciente.nivelTriaje}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.frecuencia_cardiaca} bpm
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.presionArterial} mmHg
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.spO2}%
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.temperatura}°C
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {paciente.fechaRegistro}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <Link to={`/triaje/${paciente.id}`}> {/* Podrías pasar el ID para edición */}
                    <button className="px-3 py-1 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors">
                      Editar
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}