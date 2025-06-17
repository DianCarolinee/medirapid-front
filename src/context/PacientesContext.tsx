import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Paciente {
  id: number;
  apellidoPaterno: string; // Este campo no está en el formulario, necesitarás agregarlo o considerarlo opcional.
  apellidoMaterno: string; // Este campo no está en el formulario, necesitarás agregarlo o considerarlo opcional.
  sexo: string;
  edad: number;
  arrivalMode: string;
  injury: string;
  chiefComplain: string;
  mentalState: string;
  hasPain: string;
  painScale: number;
  sbp: number;
  dbp: number;
  hr: number;
  rr: number;
  bt: number;
  nivelTriaje: string; // Se calculará o se establecerá por defecto.
  frecuencia_cardiaca: number; // Mapea a 'hr'
  presionArterial: string; // Combina 'sbp' y 'dbp'
  spO2: number; // No está en el formulario, considera añadirlo o eliminarlo de la tabla.
  temperatura: number; // Mapea a 'bt'
  fechaRegistro: string;
}

interface PacientesContextType {
  pacientes: Paciente[];
  addPaciente: (newPaciente: Omit<Paciente, 'id' | 'nivelTriaje' | 'frecuencia_cardiaca' | 'presionArterial' | 'temperatura' | 'fechaRegistro' | 'spO2'> & {
    apellidoPaterno: string;
    apellidoMaterno: string;
    spO2: number;
  }) => void;
}

const PacientesContext = createContext<PacientesContextType | undefined>(undefined);

export const PacientesProvider = ({ children }: { children: ReactNode }) => {
  const [pacientes, setPacientes] = useState<Paciente[]>(() => {
    // Cargar pacientes desde localStorage al iniciar
    const savedPacientes = localStorage.getItem("pacientes");
    return savedPacientes ? JSON.parse(savedPacientes) : [];
  });

  useEffect(() => {
    // Guardar pacientes en localStorage cada vez que cambian
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const addPaciente = (newPacienteData: Omit<Paciente, 'id' | 'nivelTriaje' | 'frecuencia_cardiaca' | 'presionArterial' | 'temperatura' | 'fechaRegistro' | 'spO2'> & {
    apellidoPaterno: string;
    apellidoMaterno: string;
    spO2: number;
  }) => {
    // Simular nivel de triaje y otros datos si no están en el formulario
    // Aquí puedes implementar la lógica real del triaje
    let nivelTriajeCalculado = "NO EMERGENCIA"; // Valor por defecto
    if (newPacienteData.hr > 100 || newPacienteData.sbp < 90) {
      nivelTriajeCalculado = "EMERGENCIA";
    } else if (newPacienteData.bt > 38.5) {
      nivelTriajeCalculado = "EMERGENCIA";
    }

    const nuevaEntrada: Paciente = {
      ...newPacienteData,
      id: pacientes.length > 0 ? Math.max(...pacientes.map(p => p.id)) + 1 : 1,
      nivelTriaje: nivelTriajeCalculado,
      frecuencia_cardiaca: newPacienteData.hr,
      presionArterial: `${newPacienteData.sbp}/${newPacienteData.dbp}`,
      temperatura: newPacienteData.bt,
      spO2: newPacienteData.spO2, // Asegúrate de que spO2 se capture en el formulario o sea un valor predeterminado
      fechaRegistro: new Date().toLocaleString(),
    };
    setPacientes((prevPacientes) => [...prevPacientes, nuevaEntrada]);
  };

  return (
    <PacientesContext.Provider value={{ pacientes, addPaciente }}>
      {children}
    </PacientesContext.Provider>
  );
};

export const usePacientes = () => {
  const context = useContext(PacientesContext);
  if (context === undefined) {
    throw new Error("usePacientes must be used within a PacientesProvider");
  }
  return context;
};