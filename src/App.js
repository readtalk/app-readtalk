import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="ReadTalk Logo" />
      </div>

      {/* Judul */}
      <h1 className="title">Welcome to ReadTalk</h1>

      {/* Description */}
      <p className="description">
        Read our <span className="policy-link">Privacy Policy</span>. Tap "Agree and continue" 
        to accept our <span className="policy-link">Terms of Service</span>.
      </p>

      {/* Language Selector */}
      <div className="language-selector">
        🌐 English 
        <span className="arrow">▼</span>
      </div>

      {/* Tombol Agree - Warna Merah sesuai request */}
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
