import type { Metadata } from 'next';
import './globals.css';

 
export const metadata: Metadata = {
  manifest: '/site.webmanifest',
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://audio-processor-liart.vercel.app/'),
  title: {
    template: '%s',
    default: 'Audio Processor | Web Application for Audio Processing',
  },
  keywords:"audio processing, loudness normalization, audio editing, web application",
  description:
    'Loudness Normalization & Editing',
  openGraph: {
    title: {
      template: '%s',
      default: 'Audio Processor | Web Application for Audio Processing',
    },
    description:
      'Loudness Normalization & Editing',
    url: process.env.NEXTAUTH_URL || 'https://audio-processor-liart.vercel.app/',
    type: 'website',
    images: [
      { url: '/logo2.jpg', width: 1200, height: 640 },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className="antialiased">{children}</body>
    </html>
  );
}
