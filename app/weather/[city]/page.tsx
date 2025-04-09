import WeatherDetailClient from './WeatherDetailClient';

export async function generateStaticParams() {
  return [
    { city: 'new-york' },
    { city: 'london' },
    { city: 'tokyo' },
  ];
}

interface PageProps {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function WeatherDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <WeatherDetailClient city={resolvedParams.city} />;
} 