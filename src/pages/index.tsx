import { Test } from "@/features/test";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World!!
      </div>
      <Test />
    </main>
  );
}
