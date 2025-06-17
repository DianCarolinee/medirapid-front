import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";
import { Link } from "react-router";


export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Dashboard de pacientes | Medi-Rapid"
        description="Este es el dashboard de pacientes de Medi-Rapid, donde puedes ver y gestionar la información de los pacientes"
      />
      <div className="flex justify-end mb-4">
        <Link
          to="/nuevo-triaje"
          className="px-3 py-1 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors"
        >
          Nuevo Triaje
        </Link>
      </div>

      <div className="space-y-6">
        <ComponentCard title="Triaje">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
