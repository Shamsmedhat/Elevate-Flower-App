"use client";

// Page props type
type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      {/* Message */}
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>

      {/* Button */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
