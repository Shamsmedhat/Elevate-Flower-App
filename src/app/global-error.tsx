"use client";

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <main className="h-screen flex items-center justify-center gap-6 text-center">
          {/* Headline */}
          <h1 className="text-9xl font-bold text-red-600">Error!</h1>

          {/* Message */}
          <p>{error.message}</p>

          {/* Try again */}
          <button
            className="mt-12"
            onClick={reset}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
