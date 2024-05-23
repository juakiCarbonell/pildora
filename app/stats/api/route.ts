export async function GET() {
  const data = {
    reactDevelopers: 21,
    angularDevelopers: 21,
    totalPaidInvoices: "10.481,75€",
    totalPendingInvoices: "1.256,34€",
  };

  return Response.json(data);
}
