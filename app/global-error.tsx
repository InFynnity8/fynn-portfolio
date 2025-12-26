"use client";

import NextError from "next/error";
// import { useEffect } from "react";
import React from "react";

export default function GlobalError({ error }: { error: unknown }) {
  // useEffect(() => {
  //   try {
  //     Sentry.captureException(error);
  //   } catch (e) {
  //     // ignore
  //   }
  // }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
