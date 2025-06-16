import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Dashboard de pacientes | Medi-Rapid"
        description="Este es el dashboard de pacientes de Medi-Rapid, donde puedes ver y gestionar la información de los pacientes"
      />
      <PageBreadcrumb pageTitle="Lista de Pacientes" />
      <div className="space-y-6">
        <ComponentCard title="Triaje">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
