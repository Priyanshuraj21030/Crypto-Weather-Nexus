import CryptoDetailClient from './CryptoDetailClient';

export async function generateStaticParams() {
  return [
    { symbol: 'bitcoin' },
    { symbol: 'ethereum' },
    { symbol: 'dogecoin' },
  ];
}

interface PageProps {
  params: Promise<{ symbol: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CryptoDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <CryptoDetailClient symbol={resolvedParams.symbol} />;
} 