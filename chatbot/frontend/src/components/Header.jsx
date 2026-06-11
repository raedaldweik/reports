export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 shrink-0"
      style={{ background: 'var(--nav-grad)', borderBottom: '2px solid rgba(185,28,44,0.5)' }}>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center p-1"
          style={{ background: 'rgba(255,255,255,0.92)' }}>
          <img src="/logo.png" alt="RTA" className="w-full h-full object-contain"
            onError={e => { e.target.style.display = 'none'; }} />
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-wide text-white">RTA Smart Monitoring Assistant</div>
          <div className="text-[9.5px] font-bold tracking-[0.18em] uppercase" style={{ color: '#dc2626' }}>
            Smart Monitoring · Agentic AI
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="text-right">
          <div className="text-[11.5px] font-semibold text-white">Mana El Mansori</div>
          <div className="text-[9.5px]" style={{ color: 'rgba(255,255,255,0.55)' }}>RTA Smart Monitoring Centre</div>
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold text-white"
          style={{ background: 'var(--gold-grad)' }}>
          ME
        </div>
      </div>
    </header>
  );
}
