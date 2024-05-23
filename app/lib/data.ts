
import {
  User,
  Revenue,
  Stats,
} from './definitions';

export const getRevenue = async (): Promise<Revenue[]> => {
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/');
  return revenue.json();
};

export const getRevenueNotCache = async (): Promise<Revenue[]> => {
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/', {
    cache: 'no-store',
  });
  return revenue.json();
};

export const getRevenueNotCacheSlow = async (): Promise<Revenue[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/', {
    cache: 'no-store',
  });
  return revenue.json();
};


export const getUsers = async (): Promise<User[]> => {
  const users = await fetch('https://pildora.vercel.app/users/api/');
  return users.json();
};
export const getUsersNotCached = async (): Promise<User[]> => {
  const users = await fetch('https://pildora.vercel.app/users/api/', {
    cache: 'no-store',
  });
  return users.json();
};


export const getStats = async (): Promise<Stats> => {
  const revenue = await fetch('https://pildora.vercel.app/stats/api/');
  return revenue.json();
};
export const getStatsNotCached = async (): Promise<Stats> => {
  const revenue = await fetch('https://pildora.vercel.app/stats/api/', {
    cache: 'no-store',
  });
  return revenue.json();
};
