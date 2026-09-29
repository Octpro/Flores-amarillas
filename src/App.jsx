import { useState, useEffect } from 'react';
import YellowFlowers from './components/YellowFlowers';
import CountdownLock from './components/CountdownLock';
import { usePhaseUnlock } from './hooks/usePhaseUnlock';

// Cambiá esta clave por la que quieras usar en tu link
const ACCESS_TOKEN = "sorpresa2026";

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { isUnlocked, forcedUnlock, registerLockClick, unlockDate } = usePhaseUnlock();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get('key');
    const storedAuth = localStorage.getItem('site_access');

    if (keyParam === ACCESS_TOKEN || storedAuth === ACCESS_TOKEN) {
      localStorage.setItem('site_access', ACCESS_TOKEN);
      setIsAuthorized(true);
    }
  }, []);

  // Si entra sin el link o la clave correcta, muestra pantalla de bloqueo / 404
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500 font-mono text-sm">
        404 | Not Found
      </div>
    );
  }

  // Si tiene acceso, renderiza la app normal
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(253,224,71,0.28),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(251,191,36,0.18),_transparent_60%)]" />
      <div className="relative mx-auto flex min-h-svh max-w-lg flex-col">
        <YellowFlowers />
        <CountdownLock
          isUnlocked={isUnlocked}
          forcedUnlock={forcedUnlock}
          unlockDate={unlockDate}
          onLockClick={registerLockClick}
        />
      </div>
    </div>
  );
}