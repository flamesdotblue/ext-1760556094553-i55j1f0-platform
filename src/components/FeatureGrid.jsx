import React from 'react';

const features = [
  {
    title: 'Glassmorphism',
    desc:
      'Semi-transparent surfaces with strong blurs and soft borders create depth while keeping focus on content.',
  },
  {
    title: 'Micro-interactions',
    desc:
      'Hover glows and subtle gradients provide delightful feedback without distraction.',
  },
  {
    title: '3D Spline Hero',
    desc:
      'An interactive, floating AI sparkle scene anchors the page with a premium aesthetic.',
  },
  {
    title: 'Responsive & Accessible',
    desc:
      'Keyboard focus rings, scalable layout, and color contrast on a dark theme.',
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {features.map((f) => (
        <FeatureCard key={f.title} title={f.title} desc={f.desc} />
      ))}
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
      <h3 className="relative z-10 text-lg font-semibold">{title}</h3>
      <p className="relative z-10 mt-2 text-sm text-white/80 leading-relaxed">{desc}</p>
    </div>
  );
}
