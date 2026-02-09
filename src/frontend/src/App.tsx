import { useEffect } from 'react';
import ValentinePrompt from './components/ValentinePrompt';
import { syncRuntimeMetadata } from './utils/appMetadata';
import { assertNoLegacySlug } from './utils/legacySlugGuard';
import { guardAgainstAdminTokenHash } from './utils/adminTokenHashGuard';

function App() {
  useEffect(() => {
    // Guard against admin token in URL hash (must run first)
    guardAgainstAdminTokenHash();
    
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
