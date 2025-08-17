"use client";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow"><path d="M12 3l8.66 5v8L12 21l-8.66-5V8L12 3z" stroke="#38bdf8" strokeWidth="1.5"/><path d="M12 7l5 2.9v4.2L12 17l-5-2.9V9.9L12 7z" fill="#0ea5e9"/></svg>
            <span className="font-extrabold tracking-tight text-xl">CodeQube</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-brand-300">Services</a>
            <a href="#work" className="hover:text-brand-300">Work</a>
            <a href="#process" className="hover:text-brand-300">Process</a>
            <a href="#about" className="hover:text-brand-300">About</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 font-semibold text-slate-900">Contact</a>
          </nav>
          <button onClick={() => setOpen(v=>!v)} className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-slate-800" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${open ? "" : "hidden"} border-t border-slate-800 bg-slate-900/80`}>
        <nav className="mx-auto max-w-7xl px-4 py-3 grid gap-3 text-sm">
          <a href="#services" className="py-2">Services</a>
          <a href="#work" className="py-2">Work</a>
          <a href="#process" className="py-2">Process</a>
          <a href="#about" className="py-2">About</a>
          <a href="#contact" className="py-2 font-semibold text-brand-300">Contact</a>
        </nav>
      </div>
    </header>
  )
}
