import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Logo Bawaan dengan Flip */}
      <div className="logo-container">
        <img 
          src={logo} 
          className="logo flipped" 
          alt="ReadTalk Logo" 
        />
      </div>

      <h1 className="title">Welcome to ReadTalk</h1>

      <p className="description">
        Read our <span className="policy-link">Privacy Policy</span>. Tap "Agree and continue" 
        to accept our <span className="policy-link">Terms of Service</span>.
      </p>

      <div className="language-selector">
        🌐 English <span className="arrow">▼</span>
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
