import { useEffect } from 'react';
import ValentinePrompt from './components/ValentinePrompt';
import { redirectIfMahekUrl, PUBLIC_SITE_URL } from './config/publicSiteUrl';
import { syncMetadata } from './utils/appMetadata';
import AppLoadedIndicator from './components/AppLoadedIndicator';

function App() {
  // Guard against any URL containing "mahek" - redirect to correct URL
  useEffect(() => {
    redirectIfMahekUrl();
  }, []);

  // Sync metadata after mount to ensure correct title and canonical values
  useEffect(() => {
    syncMetadata();
    
    // Production sanity check (console-only, non-UI)
    if (import.meta.env.PROD) {
      console.log('[Production Check] App mounted successfully');
      console.log('[Production Check] Current URL:', window.location.href);
      console.log('[Production Check] Expected canonical:', PUBLIC_SITE_URL);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <ValentinePrompt />
      <AppLoadedIndicator />
    </div>
  );
}

export default App;
