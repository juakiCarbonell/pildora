import { Inter, Lusitana, Encode_Sans_Expanded } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const encodeSans = Encode_Sans_Expanded({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});