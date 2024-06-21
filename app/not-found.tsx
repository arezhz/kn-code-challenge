import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-3xl text-rose-500">Not Found</h2>
      <p className="text-md">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
