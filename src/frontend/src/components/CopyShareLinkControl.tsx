import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Share2, Check, AlertCircle, Info } from 'lucide-react';
import { PUBLIC_SITE_URL } from '@/config/publicSiteUrl';

export default function CopyShareLinkControl() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PUBLIC_SITE_URL);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      setError(true);
    }
  };

  return (
    <div className="w-full max-w-md space-y-3">
      <Button
        onClick={handleCopy}
        variant="outline"
        className="w-full gap-2 border-romantic-primary/30 hover:bg-romantic-primary/5"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-600" />
            <span>Link copied!</span>
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4" />
            <span>Copy share link</span>
          </>
        )}
      </Button>

      <div className="flex items-start gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
        <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-blue-800">
          Share only this clean link. Never share URLs containing <code className="bg-blue-100 px-1 rounded">#caffeineAdminToken=...</code> — those are admin-only and will show a blank screen to visitors.
        </p>
      </div>

      {error && (
        <div className="space-y-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center gap-2 text-amber-800 text-sm font-medium">
            <AlertCircle className="h-4 w-4" />
            <span>Unable to copy automatically</span>
          </div>
          <div className="space-y-1">
            <label htmlFor="fallback-url" className="text-xs text-amber-700">
              Please copy this link manually:
            </label>
            <Input
              id="fallback-url"
              value={PUBLIC_SITE_URL}
              readOnly
              className="text-sm bg-white"
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
