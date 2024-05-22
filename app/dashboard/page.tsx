// import UsersChart from '@/app/ui/dashboard/users-chart';
import { Suspense } from 'react';
import Image from 'next/image';
import { fetchRevenue, fetchLatestInvoices, fetchCardData, } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Card } from '@/app/ui/dashboard/cards';

async function getData() {
  const res = await fetch('dashboard/api')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Dashboard() {
  const revenue = await fetchRevenue()
  const data = await getData()
  console.log('data', data)
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Importe Generado" value={totalPaidInvoices} type="collected" />
        <Card title="Importe pendiente" value={totalPendingInvoices} type="pending" />
        <Card title="Desarrolladores React" value={numberOfInvoices} type="react" />
        <Card
          title="Desarrolladores Angular"
          value={numberOfCustomers}
          type="angular"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
