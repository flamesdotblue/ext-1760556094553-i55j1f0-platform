import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
        <p className="order-2 sm:order-1">© {new Date().getFullYear()} GlassBar. All rights reserved.</p>
        <p className="order-1 sm:order-2">
          Built with React, Tailwind and Spline.
        </p>
      </div>
    </footer>
  );
}
