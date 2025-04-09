'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExternalLink, RefreshCw, Clock, Newspaper } from 'lucide-react';
import type { RootState } from '@/lib/store';
import { fetchNewsData } from '@/lib/store/newsSlice';
import { Card } from '@/components/ui/card';

export function NewsSection() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsData() as any);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        ))}
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

  return (
    <div className="space-y-4">
      {data.map((article) => (
        <Card key={article.url} className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 truncate" title={article.title}>
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2" title={article.description}>
                {article.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Read more</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}