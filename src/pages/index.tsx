import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col justify-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl font-extrabold tracking-tight">
          The best place to learn development
        </h1>
        <ul className="list-inside list-disc text-2xl leading-relaxed">
          <li>Completely free of cost</li>
          <li>No registration necessary</li>
          <li>1000+ examples</li>
          <li>Submit Assignments</li>
        </ul>
        <Link
          href="/auth"
          className="w-max rounded-md bg-green-600 py-4 px-8 text-xl font-medium text-zinc-100"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
}
