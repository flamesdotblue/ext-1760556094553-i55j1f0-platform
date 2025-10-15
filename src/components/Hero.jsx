import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 h-full flex items-end md:items-center">
        <div className="w-full pb-24 md:pb-0 md:pt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs md:text-sm border border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            Floating glassmorphic 3D AI sparkles
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Aesthetic Glassmorphic Toolbar
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
            A modern, futuristic toolbar with soft blurs, subtle depth, and delightful micro-interactions. Paired with an interactive Spline scene for a premium feel.
          </p>
        </div>
      </div>
    </section>
  );
}
