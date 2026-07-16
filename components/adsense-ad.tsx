'use client';

import { useEffect } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal' | 'link';
  fullWidth?: boolean;
  responsive?: boolean;
}

export function AdSenseAd({
  adSlot,
  adFormat = 'auto',
  fullWidth = true,
  responsive = true,
}: AdSenseAdProps) {
  useEffect(() => {
    // The AdSense script is loaded once globally in app/layout.tsx.
    // Here we just request an ad fill for this <ins> slot.
    if (typeof window !== 'undefined') {
      try {
        // @ts-expect-error - adsbygoogle is injected by the global AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // ignore: ad slot may already be filled
      }
    }
  }, []);

  return (
    <div className="ad-container my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          margin: '1.5rem auto',
        }}
        data-ad-client="ca-pub-6755991999371634"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive.toString()}
      />
      {/* Fallback text for when ads don't load */}
      <noscript>
        <div className="p-4 bg-card text-muted-foreground text-center text-sm rounded">
          Advertisement
        </div>
      </noscript>
    </div>
  );
}

export function AdSenseVertical({ adSlot }: { adSlot: string }) {
  return (
    <div className="ad-sidebar">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minWidth: '300px',
          width: '100%',
          maxWidth: '336px',
          margin: '1rem auto',
        }}
        data-ad-client="ca-pub-6755991999371634"
        data-ad-slot={adSlot}
        data-ad-format="vertical"
      />
    </div>
  );
}

export function AdSenseHorizontal({ adSlot }: { adSlot: string }) {
  return (
    <div className="ad-header my-6">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          minHeight: '90px',
          margin: '1rem 0',
        }}
        data-ad-client="ca-pub-6755991999371634"
        data-ad-slot={adSlot}
        data-ad-format="horizontal"
      />
    </div>
  );
}
