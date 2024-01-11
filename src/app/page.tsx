import Image from "next/image";
import Box from "./components/Box";
import InstallBtn from "./components/InstallBtn";
import github from "@/../public/github.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-3 selection:text-zinc-900 selection:bg-slate-400">
      <a
        href="https://github.com/Xeven777/tictactoe-nextjs"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-0 rounded-s-full bg-slate-300 p-2 shadow-md shadow-gray-600"
      >
        <Image src={github} alt="github" width={20} />
      </a>
      <InstallBtn />
      <h2 className="text-3xl md:text-4xl font-bold p-10">Tic-Tac-Toe</h2>
      <Box />
      <a href="https://bento.me/anish7" className="fixed bottom-4 right-8">
        Made with ❤️ by <span className="font-semibold">Anish</span>
      </a>
    </main>
  );
}
