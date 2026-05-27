'use client';

// Tells TypeScript that window.Calendly exists once the script loads
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  url: string;
  className?: string;
}

/**
 * Calls Calendly's official popup widget API on click.
 * No iframe embedding — Calendly manages their own popup overlay.
 */
export function CalendlyButton({ url, className }: CalendlyButtonProps) {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in new tab if script hasn't loaded yet
      window.open(url, '_blank', 'noreferrer');
    }
  };

  return (
    <button
      id="schedule-call-btn"
      onClick={openCalendly}
      className={className}
      aria-label="Open scheduling calendar"
    >
      📅 Schedule Call
    </button>
  );
}
