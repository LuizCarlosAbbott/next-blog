import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/faq">
        <a>go to faq</a>
      </Link>
    </div>
  );
}
