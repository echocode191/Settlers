import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// PWA register from vite-plugin-pwa
import { registerSW } from 'virtual:pwa-register';

// Automatically handle service worker updates
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('🔄 New version available. Refresh now?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('📴 App is ready to work offline.');
  }
});

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
