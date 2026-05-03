"use client"
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image src="/dog_loading.gif" alt="loading" width={200} height={200} unoptimized />
    </div>
  );
}