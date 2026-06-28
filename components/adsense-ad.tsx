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
    // Initialize Google AdSense when the component mounts
    if (typeof window !== 'undefined') {
      const script = window.document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx';
      script.crossOrigin = 'anonymous';
      window.document.body.appendChild(script);
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
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
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
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
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
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={adSlot}
        data-ad-format="horizontal"
      />
    </div>
  );
}
