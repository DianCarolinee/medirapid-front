 /*import { useState } from "react";
import { useNavigate } from "react-router";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import { v4 as uuidv4 } from "uuid";
import { usePacientes } from "../../context/PacientesContext"; 

export default function NuevoTriaje() {
  const navigate = useNavigate();
  const { agregarPaciente } = usePacientes(); // 👈 OBTIENE FUNC DEL CONTEXTO

  const [step, setStep] = useState(1);

  const [paciente, setPaciente] = useState({
    idPaciente: uuidv4().split("-")[0].toUpperCase(),
    idHistoriaClinica: uuidv4().split("-")[1].toUpperCase(),
    dni: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    sexo: "",
    edad: 0,
    nivelTriaje: "",
    frecuencia_cardiaca: 0,
    presionArterial: "",
    spO2: 0,
    temperatura: 0,
    fechaRegistro: new Date().toISOString().split("T")[0], // Formato YYYY-MM-DD
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaciente((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const { dni, apellidoPaterno, apellidoMaterno } = paciente;
    if (dni && apellidoPaterno && apellidoMaterno) {
      setStep(2);
    } else {
      alert("Completa todos los campos del paciente.");
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleCancel = () => {
    navigate("/pacientes");
  };

  const handleFinish = () => {
    agregarPaciente(paciente);
    navigate("/pacientes");

  };
  

  return (
    <div className="w-full">
      <PageMeta title="Nuevo Triaje | Medi-Rapid" description="Formulario en dos pasos para registrar triaje" />
      <PageBreadcrumb pageTitle="Nuevo Triaje" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold mb-4">Paso 1: Datos del Paciente</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">ID Paciente</label>
                  <input
                    type="text"
                    name="idPaciente"
                    value={paciente.idPaciente}
                    disabled
                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">ID Historia Clínica</label>
                  <input
                    type="text"
                    name="idHistoriaClinica"
                    value={paciente.idHistoriaClinica}
                    disabled
                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">DNI</label>
                  <input
                    type="text"
                    name="dni"
                    value={paciente.dni}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Apellido Paterno</label>
                  <input
                    type="text"
                    name="apellidoPaterno"
                    value={paciente.apellidoPaterno}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">Apellido Materno</label>
                  <input
                    type="text"
                    name="apellidoMaterno"
                    value={paciente.apellidoMaterno}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-1 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold mb-4">Paso 2: Formulario de Triaje</h2>
              <SelectInputs />

              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleBack}
                  className="px-3 py-1 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors"
                >
                  Volver
                </button>
                <button
                  onClick={handleFinish}
                  className="px-3 py-1 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors"
                >
                  Finalizar y Guardar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
*/