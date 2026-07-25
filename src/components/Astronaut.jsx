export default function Astronaut() {
  return (
    <div className="astronaut" aria-hidden="true">
      <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Backpack */}
        <rect x="60" y="68" width="80" height="90" rx="14" fill="#1e3a5f" stroke="#64ffda" strokeWidth="1.5"/>
        {/* Helmet */}
        <circle cx="100" cy="55" r="40" fill="#0f2744" stroke="#64ffda" strokeWidth="1.5"/>
        {/* Visor */}
        <ellipse cx="100" cy="52" rx="28" ry="24" fill="#0a192f" stroke="#8892b0" strokeWidth="1"/>
        {/* Visor glare */}
        <ellipse cx="110" cy="44" rx="8" ry="12" fill="rgba(100,255,218,0.15)" transform="rotate(-15 110 44)"/>
        {/* Body */}
        <rect x="70" y="95" width="60" height="55" rx="10" fill="#1a3352" stroke="#64ffda" strokeWidth="1"/>
        {/* Left arm */}
        <path d="M70 105 Q40 120 45 150" stroke="#64ffda" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="45" cy="152" r="6" fill="#1a3352" stroke="#64ffda" strokeWidth="1"/>
        {/* Right arm */}
        <path d="M130 105 Q160 115 155 148" stroke="#64ffda" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="155" cy="150" r="6" fill="#1a3352" stroke="#64ffda" strokeWidth="1"/>
        {/* Left leg */}
        <path d="M82 150 Q75 190 70 215" stroke="#64ffda" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="68" cy="220" rx="10" ry="6" fill="#1a3352" stroke="#64ffda" strokeWidth="1"/>
        {/* Right leg */}
        <path d="M118 150 Q125 192 130 215" stroke="#64ffda" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="132" cy="220" rx="10" ry="6" fill="#1a3352" stroke="#64ffda" strokeWidth="1"/>
        {/* Antenna */}
        <line x1="100" y1="15" x2="100" y2="5" stroke="#64ffda" strokeWidth="1.5"/>
        <circle cx="100" cy="4" r="3" fill="#64ffda"/>
        {/* Chest panel */}
        <rect x="85" y="108" width="30" height="18" rx="4" fill="#0a192f" stroke="#8892b0" strokeWidth=".8"/>
        <circle cx="95" cy="117" r="2" fill="#64ffda"/>
        <circle cx="105" cy="117" r="2" fill="#f472b6"/>
      </svg>
    </div>
  );
}
