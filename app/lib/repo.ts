
import {
  User,
  Revenue,
  Stats,
} from './definitions';

export const fetchRevenue = async (): Promise<Revenue[]> => {
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/');
  return revenue.json();
};

export const fetchUsers = async (): Promise<User[]> => {
  const users = await fetch('https://pildora.vercel.app/users/api/');
  return users.json();
};


export const fetchCardStats = async (): Promise<Stats> => {
  const revenue = await fetch('https://pildora.vercel.app/stats/api/');
  return revenue.json();
};


