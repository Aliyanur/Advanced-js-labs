const http = require('http');

// Simulated database
const fetchUserData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        username: 'AlmauStudent2026',
        theme: 'dark',
      });
    }, 500);
  });
};

function getClientCode() {
  return `
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM Ready. Starting Hydration...');

      const initialState = window.__INITIAL_STATE__ || {};
      console.log('State:', initialState);

      const profileNode = document.getElementById('user-profile');
      const connectBtn = document.getElementById('connect-btn');
      const statusBadge = document.getElementById('status-badge');

      if (!profileNode || !connectBtn || !statusBadge) {
        console.error('Hydration failed');
        return;
      }

      setTimeout(() => {
        profileNode.classList.remove('loading');

        connectBtn.removeAttribute('disabled');
        connectBtn.textContent = 'Go Online';

        connectBtn.addEventListener('click', () => {
          if (statusBadge.textContent === 'Offline') {
            statusBadge.textContent = 'Online';
            statusBadge.style.color = 'green';
            connectBtn.textContent = 'Go Offline';

            console.log('User ' + initialState.username + ' connected');
          } else {
            statusBadge.textContent = 'Offline';
            statusBadge.style.color = 'inherit';
            connectBtn.textContent = 'Go Online';
          }
        });

        console.log('Hydration success');
      }, 1000);
    });
  `;
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    const userData = await fetchUserData();

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>SSR Lab</title>

      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(userData)};
      </script>

      <style>
        .loading { opacity: 0.5; }
      </style>
    </head>
    <body>

      <h1>Dashboard</h1>

      <div id="user-profile" class="loading">
        <h2>Welcome, <span>${userData.username}</span></h2>
        <p>Status: <span id="status-badge">Offline</span></p>
        <button id="connect-btn" disabled>Connecting...</button>
      </div>

      <script src="/client.js"></script>
    </body>
    </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } 
  else if (req.url === '/client.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(getClientCode());
  } 
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});