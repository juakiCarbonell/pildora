import { Revenue } from "./definitions";

export const fetchRevenueSlow = async (): Promise<Revenue[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const revenue = await fetch('https://pildora.vercel.app/revenue/api/', {
    cache: 'no-store',
  });
  return revenue.json();
};
