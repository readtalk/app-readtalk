import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-white">
      
      {/* Logo ReadTalk - Besar di tengah */}
      <div className="mb-12">
        <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-6xl">📖</span>
        </div>
      </div>

      {/* Judul */}
      <h1 className="text-3xl font-semibold mb-2 text-center">
        Welcome to ReadTalk
      </h1>

      {/* Deskripsi */}
      <p className="text-gray-400 text-center max-w-[280px] mb-10">
        Read our <span className="text-blue-400">Privacy Policy</span>. Tap "Agree and continue" 
        to accept our <span className="text-blue-400">Terms of Service</span>.
      </p>

      {/* Tombol Bahasa */}
      <div className="bg-zinc-900 text-white px-6 py-2.5 rounded-full flex items-center gap-2 mb-8 border border-zinc-700">
        <span className="text-lg">🌐</span>
        <span>English</span>
        <span className="text-xs">▼</span>
      </div>

      {/* Tombol Agree and Continue */}
      <a
        href="https://auth.readtalk.workers.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[300px] bg-green-500 hover:bg-green-600 transition py-4 rounded-full text-center font-semibold text-lg active:scale-95"
      >
        Agree and continue
      </a>

    </div>
  );
}

export default App;
