import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log(`
%c  Hey, you found this. 👀
%c  ciano.webs  
%c  Built with React + Vite
%c  Like what you see? Let's build something together.
%c  https://ciano-webs.vercel.app
`, 
'background: #00ff88; color: #000; font-family: monospace; font-size: 14px; font-weight: bold; padding: 6px 12px;',
'color: #f0f0f0; font-family: monospace; font-size: 14px; font-weight: bold; padding: 2px 0;',
'color: #666666; font-family: monospace; font-size: 12px; padding: 2px 0;',
'color: #666666; font-family: monospace; font-size: 12px; padding: 2px 0;',
'color: #00ff88; font-family: monospace; font-size: 12px; padding: 2px 0;'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)