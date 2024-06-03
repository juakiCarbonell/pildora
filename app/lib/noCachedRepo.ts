import { Revenue, Stats, User } from "./definitions";

export const fetchUsers = async (): Promise<User[]> => {
  const users = await fetch('https://pildora.vercel.app/users/api/', {
    cache: 'no-store',
  });
  return users.json();
};

export const fetchCardStats = async (): Promise<Stats> => {
  const revenue = await fetch('https://pildora.vercel.app/stats/api/', {
    cache: 'no-store',
  });
  return revenue.json();
};

export const fetchRevenue = async (): Promise<Revenue[]> => {
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/', {
    cache: 'no-store',
  });
  return revenue.json();
};

