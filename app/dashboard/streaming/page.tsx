import {
  fetchCardData,
  getUsers,
} from '@/app/lib/data';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Card } from '@/app/ui/dashboard/cards';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import RevenueChartStreaming from '@/app/ui/dashboard/revenue-chart-streaming';

export default async function Dashboard() {
  const users = await getUsers();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard Streaming</h1>
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
        <Card
          title="Desarrolladores React"
          value={numberOfInvoices}
          type="react"
        />
        <Card
          title="Desarrolladores Angular"
          value={numberOfCustomers}
          type="angular"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChartStreaming />
        </Suspense>
        <LatestInvoices users={users} />
      </div>
    </main>
  );
}
