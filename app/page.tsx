'use client';

import Link from 'next/link';
import { ArrowRight, Cloud, Coins, Newspaper, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            CryptoWeather Nexus
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your all-in-one dashboard for real-time cryptocurrency and weather updates
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="group">
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <Cloud className="h-8 w-8 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Weather Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time weather data for major cities worldwide
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">
                <Coins className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Crypto Markets
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Live cryptocurrency prices and market trends
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <Newspaper className="h-8 w-8 text-green-500 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Latest News
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay updated with the latest crypto news
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Real-time Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instant notifications for price changes and alerts
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose CryptoWeather Nexus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Real-time Data
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant updates on cryptocurrency prices and weather conditions
              </p>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                User-friendly Interface
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Clean and intuitive design for easy navigation
              </p>
            </div>
            <div className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Customizable Alerts
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Set up personalized notifications for price changes and weather updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}