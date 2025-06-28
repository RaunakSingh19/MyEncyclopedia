import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Caesar cipher encryption with shift 19
const SHIFT_KEY = 19;
const ORIGINAL_PASSWORD = 'raunak&raunak';

const encrypt = (text) => {
  return text
    .split('')
    .map((char) => {
      if (/[a-z]/.test(char)) {
        // Lowercase
        return String.fromCharCode(((char.charCodeAt(0) - 97 + SHIFT_KEY) % 26) + 97);
      } else if (/[A-Z]/.test(char)) {
        // Uppercase
        return String.fromCharCode(((char.charCodeAt(0) - 65 + SHIFT_KEY) % 26) + 65);
      } else {
        // Special characters unchanged
        return char;
      }
    })
    .join('');
};

const ENCRYPTED_PASSWORD = encrypt(ORIGINAL_PASSWORD); // Encrypt once at the top

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [inputPassword, setInputPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // First password form handler
  const handleFirstSubmit = (e) => {
    e.preventDefault();
    if (encrypt(inputPassword) === ENCRYPTED_PASSWORD) {
      setStep(2);
      setMessage('');
      setInputPassword('');
    } else {
      setMessage('❌ Invalid Secret Key');
      setInputPassword('');
    }
  };

  // Second password form handler
  const handleSecondSubmit = (e) => {
    e.preventDefault();
    if (secondPassword === 'access') {
      setStep(3);
      setMessage('');
    } else {
      setMessage('❌ Wrong secondary password');
      setSecondPassword('');
    }
  };

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>🔒 Secret Login</h2>

        {step === 1 && (
          <form onSubmit={handleFirstSubmit}>
            <input
              type="password"
              placeholder="Enter Secret Key"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.button}>Unlock</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSecondSubmit}>
            <input
              type="password"
              placeholder="Enter Secondary Password"
              value={secondPassword}
              onChange={(e) => setSecondPassword(e.target.value)}
              style={styles.input}
              autoFocus
            />
            <button type="submit" style={styles.button}>Proceed</button>
          </form>
        )}

        {step === 3 && (
          <div>
            <p style={{ ...styles.message, color: 'green' }}>✅ Verified Successfully</p>
            <button style={styles.navButton} onClick={() => redirectTo('/adminblog')}>Go to Admin Blog</button>
            <button style={styles.navButton} onClick={() => redirectTo('/admin')}>Go to Admin</button>
          </div>
        )}

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    height: '100vh',
    background: '#1e1e2f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  box: {
    background: '#fff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    width: '320px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    marginBottom: '1.5rem',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  navButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  message: {
    marginTop: '1rem',
    color: 'crimson',
    fontWeight: 'bold',
  },
};

export default LoginPage;