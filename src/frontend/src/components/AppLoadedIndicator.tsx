/**
 * AppLoadedIndicator - A small, non-intrusive indicator that confirms the React app has mounted.
 * This helps distinguish between the actual app and the Caffeine placeholder page.
 */

const BUILD_TIMESTAMP = new Date().toISOString();
const VERSION = `v${import.meta.env.VITE_APP_VERSION || '8'}`;

export default function AppLoadedIndicator() {
  return (
    <div 
      className="fixed bottom-2 right-2 text-xs opacity-50 hover:opacity-100 transition-opacity pointer-events-none select-none"
      style={{ 
        fontSize: '10px',
        lineHeight: '1.2',
        maxWidth: '120px',
        textAlign: 'right'
      }}
    >
      <div className="text-romantic-muted">
        App loaded
      </div>
      <div className="text-romantic-muted/70">
        {VERSION}
      </div>
      <div className="text-romantic-muted/50" style={{ fontSize: '8px' }}>
        {new Date(BUILD_TIMESTAMP).toLocaleString('en-US', { 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
  );
}
