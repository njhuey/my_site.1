import './globals.css';
import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Nathan Huey',
  description: 'A personal website for Nathan Huey',
};

const inter = Inter({ subsets: ['latin'] });

const source_code_pro = Source_Code_Pro({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
