import { getUsers, getRevenueNotCacheSlow, getStats, getUsersNotCached, getStatsNotCached } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import Users from '@/app/ui/dashboard/users';
import { Card } from '@/app/ui/dashboard/cards';

export default async function DashboardSlow() {
  const revenueSlow = await getRevenueNotCacheSlow();
  const users = await getUsersNotCached();
  const {
    reactDevelopers,
    angularDevelopers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await getStatsNotCached();

  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard Lenta</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Importe Generado"
          value={totalPaidInvoices}
          type="collected"
        />
        <Card
          title="Importe pendiente"
          value={totalPendingInvoices}
          type="pending"
        />
        <Card title="React dev" value={reactDevelopers} type="react" />
        <Card title="Angular dev" value={angularDevelopers} type="angular" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenueSlow} />
        <Users users={users} />
      </div>
    </main>
  );
}
