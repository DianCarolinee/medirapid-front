import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 space-y-4 xl:col-span-6">
          <StatisticsChart />
        </div>

        <div className="col-span-12 space-y-4 xl:col-span-6">
          <MonthlySalesChart />
        </div>
      </div>
    </>
  );
}
