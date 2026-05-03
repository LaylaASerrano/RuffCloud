import Nav from "@/components/Header";
import Loading from "@/components/Loading";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-start bg-white dark:bg-black">
        {/* <Loading/> */}
        <Nav />
      </main>
    </div>
  );
}