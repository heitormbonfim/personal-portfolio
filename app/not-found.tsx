"use client";

import { GlobalContext } from "@/app/contexts/global-provider";
import Loading from "@/components/loading";
import Link from "next/link";
import { useContext } from "react";

export default function NotFound() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-404 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="my-5 pt-10 text-2xl font-extrabold text-zinc-50 lg:text-4xl">
        What you lookin&apos for??
      </h1>
      <Link
        href="/"
        className="text-center font-semibold text-green-500 underline lg:text-lg"
      >
        Go back
      </Link>
    </div>
  );
}
