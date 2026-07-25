import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let stars = [];
    let shootingStars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.3,
          alpha: Math.random(),
          dAlpha: (Math.random() - 0.5) * 0.015,
        });
      }
    }

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        len: Math.random() * 80 + 40,
        speed: Math.random() * 6 + 4,
        alpha: 1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      for (const s of stars) {
        s.alpha += s.dAlpha;
        if (s.alpha <= 0.1 || s.alpha >= 1) s.dAlpha *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${s.alpha})`;
        ctx.fill();
      }

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.len, ss.y - ss.len * 0.4);
        ctx.strokeStyle = `rgba(100, 255, 218, ${ss.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ss.x += ss.speed;
        ss.y += ss.speed * 0.4;
        ss.alpha -= 0.012;
        if (ss.alpha <= 0) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    createStars();
    draw();

    const shootInterval = setInterval(() => {
      if (Math.random() > 0.5) spawnShootingStar();
    }, 2000);

    window.addEventListener('resize', () => {
      resize();
      createStars();
    });

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
