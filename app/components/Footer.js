"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Footer() {
    const pathname = usePathname();
    return (
      <footer className="border-t text-center p-4 text-sm font-semibold bg-primary-100 text-primary-900 border-primary-200">
        <p>Books Read: 3     -        Movies Watched: 5</p>
      </footer>
    );
  }