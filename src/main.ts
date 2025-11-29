import 'htmx.org';
import '@picocss/pico/css/pico.min.css';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="container">
    <h1>Wind Alert</h1>
    <p>Frontend initialized with Vite, TypeScript, HTMX, and Pico.css.</p>
    <button hx-get="/api/status" hx-swap="outerHTML">
      Check Status
    </button>
  </main>
`;
