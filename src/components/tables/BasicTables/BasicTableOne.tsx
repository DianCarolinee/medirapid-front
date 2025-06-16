import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Link } from "react-router";
import Badge from "../../ui/badge/Badge";

interface Paciente {
  id: number;
  apellidoPaterno: string;
  apellidoMaterno: string;
  sexo: string;
  edad: number;
  nivelTriaje: string;
  frecuenciaCardiaca: number;
  presionArterial: string;
  spO2: number;
  temperatura: number;
  fechaRegistro: string;
}



// Datos de ejemplo para la tabla médica
const pacientesData: Paciente[] = [
  {
    id: 1,
    apellidoPaterno: "García",
    apellidoMaterno: "López",
    sexo: "Masculino",
    edad: 35,
    nivelTriaje: "Urgente",
    frecuenciaCardiaca: 88,
    presionArterial: "120/80",
    spO2: 98,
    temperatura: 36.5,
    fechaRegistro: "2023-05-15 08:30",
  },
  {
    id: 2,
    apellidoPaterno: "Martínez",
    apellidoMaterno: "Sánchez",
    sexo: "Femenino",
    edad: 42,
    nivelTriaje: "Emergencia",
    frecuenciaCardiaca: 102,
    presionArterial: "140/90",
    spO2: 92,
    temperatura: 37.8,
    fechaRegistro: "2023-05-15 09:15",
  },
  {
    id: 3,
    apellidoPaterno: "Rodríguez",
    apellidoMaterno: "Gómez",
    sexo: "Masculino",
    edad: 28,
    nivelTriaje: "Prioritario",
    frecuenciaCardiaca: 76,
    presionArterial: "110/70",
    spO2: 99,
    temperatura: 36.2,
    fechaRegistro: "2023-05-15 10:45",
  },
  {
    id: 4,
    apellidoPaterno: "Hernández",
    apellidoMaterno: "Díaz",
    sexo: "Femenino",
    edad: 50,
    nivelTriaje: "No urgente",
    frecuenciaCardiaca: 72,
    presionArterial: "130/85",
    spO2: 97,
    temperatura: 36.8,
    fechaRegistro: "2023-05-15 11:30",
  },
  {
    id: 5,
    apellidoPaterno: "Pérez",
    apellidoMaterno: "Fernández",
    sexo: "Masculino",
    edad: 65,
    nivelTriaje: "Urgente",
    frecuenciaCardiaca: 95,
    presionArterial: "150/95",
    spO2: 94,
    temperatura: 38.2,
    fechaRegistro: "2023-05-15 12:15",
  },
];

export default function TablaRegistrosMedicos() {
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
            {pacientesData.map((paciente) => (
              <TableRow key={paciente.id}>
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
                  {paciente.frecuenciaCardiaca} bpm
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
                  <Link to="/triaje">
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