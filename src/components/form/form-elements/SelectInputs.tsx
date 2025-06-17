import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import { usePacientes } from "../../../context/PacientesContext"; // Importa el hook de contexto

export default function MedicalForm() {
  const { addPaciente } = usePacientes(); // Usa el hook para acceder a addPaciente

  // Estados para cada campo
  const [apellidoPaterno, setApellidoPaterno] = useState<string>("");
  const [apellidoMaterno, setApellidoMaterno] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [arrivalMode, setArrivalMode] = useState<string>("");
  const [injury, setInjury] = useState<string>("");
  const [chiefComplain, setChiefComplain] = useState<string>("");
  const [mentalState, setMentalState] = useState<string>("");
  const [hasPain, setHasPain] = useState<string>("");
  const [painScale, setPainScale] = useState<string>("0");
  const [sbp, setSbp] = useState<string>("");
  const [dbp, setDbp] = useState<string>("");
  const [hr, setHr] = useState<string>("");
  const [rr, setRr] = useState<string>("");
  const [bt, setBt] = useState<string>("");
  const [spO2, setSpO2] = useState<string>(""); // Nuevo estado para SpO2

  // Opciones para los selects (mantener igual)
  const sexOptions = [
    { value: "Femenino", label: "Femenino" },
    { value: "Masculino", label: "Masculino" },
  ];

  const arrivalModeOptions = [
    { value: "1", label: "Caminando" },
    { value: "2", label: "Ambulancia pública" },
    { value: "3", label: "Vehículo privado" },
    { value: "4", label: "Ambulancia privada" },
    { value: "5", label: "Otro" },
  ];

  const injuryOptions = [
    { value: "1", label: "No" },
    { value: "2", label: "Sí" },
  ];

  const mentalStateOptions = [
    { value: "1", label: "Alerta" },
    { value: "2", label: "Respuesta verbal" },
    { value: "3", label: "Respuesta al dolor" },
    { value: "4", label: "Sin respuesta" },
  ];

  const painOptions = [
    { value: "0", label: "No" },
    { value: "1", label: "Sí" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas antes de guardar
    if (!apellidoPaterno || !apellidoMaterno || !sex || !age || !arrivalMode || !chiefComplain || !mentalState || !hasPain || !sbp || !dbp || !hr || !rr || !bt || !spO2) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const newPaciente = {
      apellidoPaterno,
      apellidoMaterno,
      sexo: sex,
      edad: parseInt(age),
      arrivalMode,
      injury,
      chiefComplain,
      mentalState,
      hasPain,
      painScale: parseInt(painScale),
      sbp: parseInt(sbp),
      dbp: parseInt(dbp),
      hr: parseInt(hr),
      rr: parseInt(rr),
      bt: parseFloat(bt),
      spO2: parseInt(spO2),
    };

    addPaciente(newPaciente);

    // Limpiar el formulario después de guardar
    setApellidoPaterno("");
    setApellidoMaterno("");
    setSex("");
    setAge("");
    setArrivalMode("");
    setInjury("");
    setChiefComplain("");
    setMentalState("");
    setHasPain("");
    setPainScale("0");
    setSbp("");
    setDbp("");
    setHr("");
    setRr("");
    setBt("");
    setSpO2("");
  };

  return (
    <ComponentCard title="Formulario Médico">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información básica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Apellido Paterno</Label>
            <input
              type="text"
              value={apellidoPaterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
              placeholder="Ingresa el apellido paterno"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <Label>Apellido Materno</Label>
            <input
              type="text"
              value={apellidoMaterno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
              placeholder="Ingresa el apellido materno"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
            />
          </div>
          <div>
            <Label>Sexo</Label>
            <Select
              options={sexOptions}
              placeholder="Selecciona el sexo"
              onChange={setSex}
              className="dark:bg-dark-900"
            />
          </div>
          <div>
            <Label>Edad</Label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Ingresa la edad"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="0"
              max="120"
            />
          </div>
        </div>

        {/* Modo de llegada */}
        <div>
          <Label>Modo de llegada (Arrival Mode)</Label>
          <Select
            options={arrivalModeOptions}
            placeholder="Selecciona modo de llegada"
            onChange={setArrivalMode}
            className="dark:bg-dark-900"
          />
        </div>

        {/* Lesión y queja principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>¿Tiene lesión? (Injury)</Label>
            <div className="flex space-x-4 mt-2">
              {injuryOptions.map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="injury"
                    value={option.value}
                    checked={injury === option.value}
                    onChange={() => setInjury(option.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:bg-dark-900 dark:border-gray-700"
                  />
                  <span className="ml-2 dark:text-white">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <Label>Queja principal (Chief Complain)</Label>
            <textarea
              value={chiefComplain}
              onChange={(e) => setChiefComplain(e.target.value)}
              placeholder="Describa la queja principal"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              rows={3}
            />
          </div>
        </div>

        {/* Estado mental y dolor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Estado mental (Mental)</Label>
            <Select
              options={mentalStateOptions}
              placeholder="Selecciona estado mental"
              onChange={setMentalState}
              className="dark:bg-dark-900"
            />
          </div>
          <div>
            <Label>¿Tiene dolor? (Pain)</Label>
            <div className="flex space-x-4 mt-2">
              {painOptions.map((option) => (
                <label key={option.value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="pain"
                    value={option.value}
                    checked={hasPain === option.value}
                    onChange={() => setHasPain(option.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:bg-dark-900 dark:border-gray-700"
                  />
                  <span className="ml-2 dark:text-white">{option.label}</span>
                </label>
              ))}
            </div>
            {hasPain === "1" && (
              <div className="mt-4">
                <Label>Escala de dolor NRS (0-10)</Label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={painScale}
                    onChange={(e) => setPainScale(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-gray-700 dark:text-white w-8 text-center">
                    {painScale}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Signos vitales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <Label>PA Sistólica (SBP)</Label>
            <input
              type="number"
              value={sbp}
              onChange={(e) => setSbp(e.target.value)}
              placeholder="Ej: 120"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="50"
              max="200"
            />
          </div>
          <div>
            <Label>PA Diastólica (DBP)</Label>
            <input
              type="number"
              value={dbp}
              onChange={(e) => setDbp(e.target.value)}
              placeholder="Ej: 80"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="30"
              max="200"
            />
          </div>
          <div>
            <Label>FC (HR)</Label>
            <input
              type="number"
              value={hr}
              onChange={(e) => setHr(e.target.value)}
              placeholder="Ej: 75"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="20"
              max="250"
            />
          </div>
          <div>
            <Label>FR (RR)</Label>
            <input
              type="number"
              value={rr}
              onChange={(e) => setRr(e.target.value)}
              placeholder="Ej: 16"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="5"
              max="60"
            />
          </div>
        </div>

        {/* Temperatura y SpO2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Temperatura (°C)</Label>
            <input
              type="number"
              value={bt}
              onChange={(e) => setBt(e.target.value)}
              placeholder="Ej: 36.5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="30"
              max="45"
              step="0.1"
            />
          </div>
          <div>
            <Label>SpO2 (%)</Label>
            <input
              type="number"
              value={spO2}
              onChange={(e) => setSpO2(e.target.value)}
              placeholder="Ej: 98"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-dark-900 dark:border-gray-700 dark:text-white"
              min="0"
              max="100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:hover:bg-indigo-800"
        >
          Guardar Registro Médico
        </button>
      </form>
    </ComponentCard>
  );
}