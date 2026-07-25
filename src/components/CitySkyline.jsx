export default function CitySkyline() {
  return (
    <div className="city-skyline">
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(10,25,47,0)" />
            <stop offset="100%" stopColor="#0a192f" />
          </linearGradient>
        </defs>
        <rect width="1440" height="200" fill="url(#skylineGrad)" />
        <path
          d="M0,200 L0,160 L40,160 L40,130 L55,130 L55,110 L65,110 L65,130 L80,130 L80,145 
             L120,145 L120,100 L135,100 L135,80 L145,80 L145,100 L160,100 L160,120 
             L200,120 L200,90 L210,90 L210,60 L220,55 L230,60 L230,90 L240,90 L240,120 
             L290,120 L290,140 L330,140 L330,110 L350,110 L350,85 L360,80 L370,85 L370,110 
             L390,110 L390,130 L430,130 L430,105 L445,105 L445,70 L455,65 L465,70 L465,105 
             L480,105 L480,130 L520,130 L520,150 L560,150 L560,115 L575,115 L575,90 
             L590,85 L605,90 L605,115 L620,115 L620,140 L660,140 L660,120 L680,120 
             L680,95 L690,90 L700,95 L700,120 L720,120 L720,145 L760,145 L760,125 
             L780,125 L780,100 L795,95 L810,100 L810,125 L830,125 L830,150 
             L870,150 L870,130 L890,130 L890,105 L905,100 L920,105 L920,130 
             L940,130 L940,155 L980,155 L980,125 L1000,125 L1000,95 L1010,90 L1020,95 
             L1020,125 L1040,125 L1040,140 L1080,140 L1080,110 L1100,110 L1100,80 
             L1115,75 L1130,80 L1130,110 L1150,110 L1150,135 L1190,135 L1190,150 
             L1230,150 L1230,120 L1250,120 L1250,95 L1260,90 L1270,95 L1270,120 
             L1290,120 L1290,145 L1330,145 L1330,130 L1360,130 L1360,155 L1400,155 
             L1400,140 L1440,140 L1440,200 Z"
          fill="#060e1a"
          opacity="0.8"
        />
        {/* Windows - tiny glowing dots */}
        <g fill="#64ffda" opacity="0.4">
          <rect x="45" y="136" width="3" height="3" rx="0.5"/>
          <rect x="52" y="140" width="3" height="3" rx="0.5"/>
          <rect x="125" y="106" width="3" height="3" rx="0.5"/>
          <rect x="138" y="88" width="3" height="3" rx="0.5"/>
          <rect x="215" y="68" width="3" height="3" rx="0.5"/>
          <rect x="222" y="75" width="3" height="3" rx="0.5"/>
          <rect x="355" y="92" width="3" height="3" rx="0.5"/>
          <rect x="450" y="78" width="3" height="3" rx="0.5"/>
          <rect x="580" y="98" width="3" height="3" rx="0.5"/>
          <rect x="690" y="100" width="3" height="3" rx="0.5"/>
          <rect x="795" y="102" width="3" height="3" rx="0.5"/>
          <rect x="905" y="108" width="3" height="3" rx="0.5"/>
          <rect x="1010" y="98" width="3" height="3" rx="0.5"/>
          <rect x="1110" y="88" width="3" height="3" rx="0.5"/>
          <rect x="1260" y="98" width="3" height="3" rx="0.5"/>
        </g>
        <g fill="#f472b6" opacity="0.3">
          <rect x="60" y="120" width="2" height="2" rx="0.5"/>
          <rect x="205" y="95" width="2" height="2" rx="0.5"/>
          <rect x="340" y="118" width="2" height="2" rx="0.5"/>
          <rect x="575" y="122" width="2" height="2" rx="0.5"/>
          <rect x="890" y="115" width="2" height="2" rx="0.5"/>
          <rect x="1105" y="92" width="2" height="2" rx="0.5"/>
        </g>
      </svg>
    </div>
  );
}
