'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, BarChart2 } from 'lucide-react';
import type { RootState } from '@/lib/store';
import { fetchCryptoData } from '@/lib/store/cryptoSlice';

interface CryptoDetailClientProps {
  symbol: string;
}

export default function CryptoDetailClient({ symbol }: CryptoDetailClientProps) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    if (symbol) {
      dispatch(fetchCryptoData([symbol]) as any);
    }
  }, [dispatch, symbol]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 dark:text-red-400 text-center py-4">
        {error}
      </div>
    );
  }

  const crypto = data[symbol];

  if (!crypto) {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center py-4">
        No data available for {symbol}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {symbol.toUpperCase()}
          </h1>
          <div className={`flex items-center gap-1 ${crypto.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {crypto.usd_24h_change >= 0 ? (
              <TrendingUp className="h-5 w-5" />
            ) : (
              <TrendingDown className="h-5 w-5" />
            )}
            <span>{Math.abs(crypto.usd_24h_change).toFixed(2)}%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
            <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                ${crypto.usd.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
            <BarChart2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Market Cap</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                ${(crypto.usd_market_cap / 1e9).toFixed(2)}B
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 