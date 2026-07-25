import { useState, useEffect } from 'react';

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    setOpen(false);
    const href = e.currentTarget.getAttribute('href');
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <div className="floating-nav">
      <div className={`nav-menu ${open ? 'open' : ''}`}>
        <a href="#projects" onClick={handleClick}>⚡ Projects</a>
        <a href="#skills" onClick={handleClick}>🛠 Skills</a>
        <a href="#education" onClick={handleClick}>🎓 Education</a>
        <a href="#top" onClick={handleClick}>↑ Top</a>
      </div>
      <button
        className={`nav-toggle ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </div>
  );
}
