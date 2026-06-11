export default function Header() {
  return (
    <header className="grid items-center gap-5 px-7 pt-4 shrink-0"
      style={{ gridTemplateColumns: 'auto 1fr auto' }}>

      {/* Government of Dubai logo — left, like the dashboards */}
      <img src="/gov.png" alt="Government of Dubai"
        className="h-14 w-auto object-contain"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(15,23,42,0.08))' }}
        onError={e => { e.target.style.display = 'none'; }} />

      {/* Title + red line — the dashboards' title-row */}
      <div className="flex items-center gap-5 min-w-0">
        <h1 className="whitespace-nowrap shrink-0"
          style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>
          Smart Monitoring Assistant
        </h1>
        <div className="red-line" />
      </div>

      {/* RTA logo + Manager chip — right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(247,243,236,0.7))',
            border: '1px solid rgba(15,23,42,0.10)',
            boxShadow: '0 1px 2px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
            style={{ background: 'var(--gold-grad)' }}>
            M
          </div>
          <span className="text-[11.5px] font-semibold" style={{ color: 'var(--text-md)' }}>Manager</span>
        </div>
        <img src="/logo.png" alt="RTA"
          className="h-11 w-auto object-contain"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(15,23,42,0.08))' }}
          onError={e => { e.target.style.display = 'none'; }} />
      </div>
    </header>
  );
}
