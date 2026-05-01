import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <div className="logo">
          📖
        </div>
      </div>

      <h1 className="title">Welcome to ReadTalk</h1>

      <p className="description">
        Read our <span className="text-blue-400">Privacy Policy</span>. Tap "Agree and continue" 
        to accept our <span className="text-blue-400">Terms of Service</span>.
      </p>

      <div className="language-selector">
        🌐 English <span style={{fontSize: '12px', marginLeft: '4px'}}>▼</span>
      </div>

      <a
        href="https://auth.readtalk.workers.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="agree-button"
      >
        Agree and continue
      </a>
    </div>
  );
}

export default App;
