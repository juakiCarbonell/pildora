import {
  fetchRevenue,
} from '@/app/lib/data';
export async function GET(request: Request) {
  const data = await fetchRevenue();

  return Response.json(data);
}
