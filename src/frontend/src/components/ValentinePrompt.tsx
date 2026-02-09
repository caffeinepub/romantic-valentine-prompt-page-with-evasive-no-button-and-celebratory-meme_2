import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { BRANDING } from '@/config/branding';
import CopyShareLinkControl from './CopyShareLinkControl';

export default function ValentinePrompt() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = useCallback(() => {
    if (!containerRef.current || !noButtonRef.current || !yesButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const noButton = noButtonRef.current.getBoundingClientRect();
    const yesButton = yesButtonRef.current.getBoundingClientRect();

    const buttonWidth = noButton.width;
    const buttonHeight = noButton.height;
    const padding = 20;

    let newTop: number;
    let newLeft: number;
    let attempts = 0;
    const maxAttempts = 50;

    do {
      newTop = Math.random() * (container.height - buttonHeight - padding * 2) + padding;
      newLeft = Math.random() * (container.width - buttonWidth - padding * 2) + padding;
      attempts++;

      const noRect = {
        top: newTop,
        left: newLeft,
        right: newLeft + buttonWidth,
        bottom: newTop + buttonHeight,
      };

      const yesRect = {
        top: yesButton.top - container.top,
        left: yesButton.left - container.left,
        right: yesButton.right - container.left,
        bottom: yesButton.bottom - container.top,
      };

      const overlaps =
        noRect.left < yesRect.right &&
        noRect.right > yesRect.left &&
        noRect.top < yesRect.bottom &&
        noRect.bottom > yesRect.top;

      if (!overlaps) {
        break;
      }
    } while (attempts < maxAttempts);

    setNoButtonPosition({ top: newTop, left: newLeft });
  }, []);

  const handleYesClick = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleNoPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  const handleNoTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  if (answered) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 animate-in fade-in duration-700 w-full max-w-4xl px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-romantic-primary animate-in zoom-in duration-500">
            {BRANDING.successMessage}
          </h1>
        </div>
        <Card className="w-full overflow-hidden shadow-2xl border-romantic-primary/20 bg-white/95 backdrop-blur">
          <CardContent className="p-0">
            <img
              src="/assets/generated/valentine-good-choice-meme.dim_1200x800.png"
              alt="Good choice meme"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
        <div className="mt-4">
          <CopyShareLinkControl />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl min-h-[600px] flex items-center justify-center"
    >
      <Card className="w-full shadow-2xl border-romantic-primary/30 bg-white/95 backdrop-blur">
        <CardHeader className="text-center space-y-6 pb-8">
          <div className="flex justify-center gap-2 animate-bounce">
            <Heart className="fill-romantic-accent text-romantic-accent" size={40} />
            <Heart className="fill-romantic-primary text-romantic-primary" size={48} />
            <Heart className="fill-romantic-accent text-romantic-accent" size={40} />
          </div>
          <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-romantic-primary leading-tight px-4">
            {BRANDING.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pb-12">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <Button
              ref={yesButtonRef}
              onClick={handleYesClick}
              size="lg"
              className="text-xl sm:text-2xl px-10 sm:px-12 py-6 sm:py-8 h-auto font-bold bg-romantic-primary hover:bg-romantic-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[140px] touch-manipulation"
            >
              Yes
            </Button>
            <Button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onPointerDown={handleNoPointerDown}
              onTouchStart={handleNoTouchStart}
              size="lg"
              variant="outline"
              className="text-xl sm:text-2xl px-10 sm:px-12 py-6 sm:py-8 h-auto font-bold border-romantic-muted text-romantic-muted hover:bg-romantic-muted/10 shadow-lg min-w-[140px] touch-manipulation"
              style={
                noButtonPosition.top !== 0 || noButtonPosition.left !== 0
                  ? {
                      position: 'absolute',
                      top: `${noButtonPosition.top}px`,
                      left: `${noButtonPosition.left}px`,
                      transition: 'top 0.3s ease-out, left 0.3s ease-out',
                    }
                  : undefined
              }
            >
              No
            </Button>
          </div>
          <div className="flex justify-center px-4">
            <CopyShareLinkControl />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
