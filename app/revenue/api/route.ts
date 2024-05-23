
export async function GET() {
  const data = [
    { month: 'Jul', revenue: 1800 },
    { month: 'Ago', revenue: 2200 },
    { month: 'Sep', revenue: 2500 },
    { month: 'Oct', revenue: 2300 },
    { month: 'Nov', revenue: 3200 },
    { month: 'Dic', revenue: 3500 },
    { month: 'Ene', revenue: 3700 },
    { month: 'Feb', revenue: 2500 },
    { month: 'Mar', revenue: 2800 },
    { month: 'Abr', revenue: 3000 },
    { month: 'May', revenue: 4800 },
    { month: 'Jun', revenue: 2000 },
  ];

  return Response.json(data);
}
