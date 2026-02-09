import { useEffect } from 'react';
import ValentinePrompt from './components/ValentinePrompt';
import { syncRuntimeMetadata } from './utils/appMetadata';
import { assertNoLegacySlug } from './utils/legacySlugGuard';

function App() {
  useEffect(() => {
    // Synchronize runtime metadata on app load
    syncRuntimeMetadata();
    
    // Run legacy slug guard in development
    if (import.meta.env.DEV) {
      assertNoLegacySlug();
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-x-hidden">
      <ValentinePrompt />
    </div>
  );
}

export default App;
