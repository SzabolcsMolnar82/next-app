import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Test next!</h1>
      <a href="/users">Users</a>
      <br />
      <Link href="/users">Users</Link>
      <br />
      <ProductCard/>
    </main>
  );
}
