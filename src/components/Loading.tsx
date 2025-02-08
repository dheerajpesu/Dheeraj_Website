import React from 'react';
import { Loader2 } from 'lucide-react';

export function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-16 w-16 text-indigo-600 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading</h2>
        <p className="text-gray-600">Preparing something amazing...</p>
      </div>
    </div>
  );
}