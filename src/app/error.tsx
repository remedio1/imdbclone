"use client";

import { logError } from '@/lib/error-logging';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logError(error);
  }, [error]);


  return (
    <div className="text-center mt-10 text-xl">
      <h1 className="" >Something went wrong. Please try again</h1>      
      <button
        className="hover:text-amber-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
