import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Card } from '@/app/ui/dashboard/cards';
import { Revenue, User } from '../lib/definitions';

const getRevenue = async (): Promise<Revenue[]> => {
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/');
  return revenue.json();
};
const getUsers = async (): Promise<User[]> => {
  const users = await fetch('https://pildora.vercel.app/users/api/');
  return users.json();
};

export default async function Dashboard() {
  const revenue = await getRevenue();
  // const revenue = await fetchRevenue()
  const users = await getUsers();
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
        <RevenueChart revenue={revenue} />
        <LatestInvoices users={users} />
      </div>
    </main>
  );
}
