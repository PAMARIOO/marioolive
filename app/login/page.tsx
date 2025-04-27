// app/login/page.tsx

export default function LoginPage() {
    return (
      <main style={{ padding: 40 }}>
        <h1>🔒 Login</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 300 }}>
          <input type="email" placeholder="Email" required style={{ padding: 10 }} />
          <input type="password" placeholder="Passwort" required style={{ padding: 10 }} />
          <button type="submit" style={{ padding: '10px 20px', marginTop: 10 }}>
            Einloggen
          </button>
        </form>
      </main>
    );
  }
  