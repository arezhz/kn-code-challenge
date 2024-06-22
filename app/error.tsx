"use client";

import { AxiosError } from "axios";
import { notFound } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
//   reset,
}: {
  error: AxiosError;
//   reset: () => void;
}) {
  useEffect(() => {
    if(error.response && error.response.status === 404 ) {
        notFound()
    }
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
