'use client'

import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/login'>Login and Start syncing your pc and mob together</Link>
    </main>
  );
}
