import React from 'react';
import { Home, Search, Bell, Settings, User } from 'lucide-react';

const items = [
  { label: 'Home', icon: Home },
  { label: 'Search', icon: Search },
  { label: 'Alerts', icon: Bell },
  { label: 'Settings', icon: Settings },
  { label: 'Profile', icon: User },
];

export default function GlassToolbar() {
  return (
    <nav className="mx-auto w-full md:w-auto flex justify-center">
      <div className="flex items-center gap-1 md:gap-2 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] px-2 py-2 md:px-3 md:py-3">
        {items.map((item) => (
          <ToolbarButton key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </nav>
  );
}

function ToolbarButton({ label, icon: Icon }) {
  return (
    <button
      className="group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-sm text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transition-colors"
      aria-label={label}
    >
      <div className="absolute inset-0 -z-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-colors" />
      <div className="relative z-10 flex items-center gap-2">
        <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
          <Icon className="h-4 w-4 text-white/90" />
        </span>
        <span className="hidden sm:inline-block font-medium tracking-wide">
          {label}
        </span>
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(120px_60px_at_var(--x,50%)_0%,rgba(59,130,246,0.35),transparent_60%)]" />
    </button>
  );
}
