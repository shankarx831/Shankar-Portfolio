#set page(
  paper: "a4",
  margin: (x: 15mm, y: 12mm),
)

#set text(
  font: "Helvetica Neue",
  size: 9.5pt,
  fill: rgb("#333333"),
)

#let primary-color = rgb("#0284c7")
#let text-dark = rgb("#0f172a")
#let text-muted = rgb("#475569")

// Header
#grid(
  columns: (1fr, auto),
  align: (left, right),
  [
    #text(size: 20pt, weight: "bold", fill: text-dark)[Sankara Narayanan Ramaligame] \
    #v(-4pt)
    #text(size: 11pt, weight: "medium", fill: primary-color)[Software & IoT Engineer]
  ],
  [
    #set text(size: 8.5pt, fill: text-muted)
    sankaranarayanan05062008\@gmail.com | +91 9150314773 \
    github.com/shankarx831 | LinkedIn \
    📍 Puducherry, India
  ]
)

#v(2pt)
#line(length: 100%, stroke: 1.5pt + primary-color)
#v(4pt)

// Summary
#text(weight: "bold", size: 10pt, fill: text-dark)[SUMMARY]
#v(-4pt)
#line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
#v(2pt)

Software and IoT-focused B.Tech student with hands-on experience in full-stack development (Flutter, Spring Boot, Web Technologies) and embedded systems. Experienced in building scalable microservices, cross-platform applications, and integrating complex cryptographic operations with decentralized networking. Built and deployed a production website for HexHive Solutions.

#v(6pt)

#grid(
  columns: (1.5fr, 1fr),
  column-gutter: 15pt,
  [
    #text(weight: "bold", size: 10pt, fill: text-dark)[PROJECTS]
    #v(-4pt)
    #line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    #v(4pt)

    *DAISY: Serverless E2EE Communication Tool* \
    #text(size: 8pt, style: "italic", fill: text-muted)[Security & Protocol Design | Nostr Relays, AES-256-GCM, ECDH, Web Workers]
    - Invented the *Daisy Key Exchange (DKE)*, a custom blind role negotiation protocol utilizing a lexicographical tie-breaker handshake to establish anonymous peer-to-peer connections.
    - Implemented Web Workers for isolated cryptographic operations, integrating AES-256-GCM encryption and ephemeral ECDH key exchange for Perfect Forward Secrecy (PFS).
    - Hardened application against state-machine exploits and metadata leakage via traffic obfuscation and automated red-team testing.

    #v(4pt)
    *HexHive Solutions — Startup Company Website* \
    #text(size: 8pt, style: "italic", fill: text-muted)[Startup & Web Dev | React, JavaScript, SEO, Responsive Design]
    - Built the complete production website for HexHive Solutions — a tech career accelerator startup.
    - Designed and shipped a production-grade React app with SEO optimization, responsive design, and modern UI/UX.

    #v(4pt)
    *ML Fingerprint Gender Identification* \
    #text(size: 8pt, style: "italic", fill: text-muted)[AI / Computer Vision | Python, Machine Learning, TensorFlow]
    - Developed a machine learning application to identify gender based on fingerprint scans, achieving 80% accuracy.
    - Processed datasets and trained identification models targeting publication in IEEE.

    #v(4pt)
    *IoT Motion-Detecting Alarm System* \
    #text(size: 8pt, style: "italic", fill: text-muted)[Microservices & Infrastructure | ESP8266, Flask, Python, Render]
    - Developed a custom motion-detecting hardware monitoring system utilizing an ESP8266 module.
    - Programmed backend infrastructure using Flask and deployed on Render with continuous health monitoring.
  ],
  [
    #text(weight: "bold", size: 10pt, fill: text-dark)[TECHNICAL SKILLS]
    #v(-4pt)
    #line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    #v(4pt)

    *Programming & Scripting* \
    Python, Java, JavaScript

    #v(4pt)
    *Cryptography & Protocols* \
    AES-256-GCM, ECDH, Nostr, DKE

    #v(4pt)
    *Backend & Web* \
    Spring Boot, Flask, Flutter, React

    #v(8pt)
    #text(weight: "bold", size: 10pt, fill: text-dark)[EDUCATION]
    #v(-4pt)
    #line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    #v(4pt)

    *B.Tech in Information Technology* \
    Sri Manakula Vinayagar Engineering College (SMVEC) \
    #text(size: 8pt, style: "italic", fill: text-muted)[Expected 2029 | Puducherry, India]

    #v(8pt)
    #text(weight: "bold", size: 10pt, fill: text-dark)[ACHIEVEMENTS]
    #v(-4pt)
    #line(length: 100%, stroke: 0.5pt + rgb("#cbd5e1"))
    #v(4pt)

    - *Foundation for Excellence (FFE):* 2026 Scholarship Candidate.
    - *OA Techfest:* Participant in regional technology and AI seminars.
    - *HexHive Solutions:* Built & deployed full production website.
  ]
)
