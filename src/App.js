import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h1 className="title">Welcome to ReadTalk</h1>

      <p className="description">
        Read our <span className="policy-link">Privacy Policy</span>. Tap "Agree and continue" 
        to accept our <span className="policy-link">Terms of Service</span>.
      </p>

      <div className="language-selector">
        🌐 English ▼
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
