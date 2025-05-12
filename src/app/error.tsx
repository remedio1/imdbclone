"use client";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
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
