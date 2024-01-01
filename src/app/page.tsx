import Box from "./components/Box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-2">
      <h2 className="text-3xl md:text-4xl font-bold p-10 selection:text-zinc-900 selection:bg-slate-400">
        Tic-Tac-Toe
      </h2>
      <Box />
      <a href="https://bento.me/anish7" className="fixed bottom-4 right-8">
        Made with ❤️ by <span className="font-semibold">Anish</span>
      </a>
    </main>
  );
}
