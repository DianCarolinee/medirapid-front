
import SelectInputs from "../../components/form/form-elements/SelectInputs";

import PageBreadcrumb from "../../components/common/PageBreadCrumb";

import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div className="w-full">
      <PageMeta
        title="Formulario Médico | TailAdmin - React.js Admin Dashboard Template"
        description="Formulario médico completo para registro de pacientes"
      />
      <PageBreadcrumb pageTitle="Formulario Médico" />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
          <SelectInputs />
        </div>
      </div>
    </div>
  );
}