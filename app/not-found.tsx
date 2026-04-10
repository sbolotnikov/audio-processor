
export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#151619] text-white flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-zinc-400 mb-8">The page you are looking for does not exist.</p>
      <a 
        href="/"
        className="px-4 py-2 bg-[#00FF00] text-black rounded hover:bg-[#00CC00] font-bold"
      >
        Go Home
      </a>
    </div>
  );
}
