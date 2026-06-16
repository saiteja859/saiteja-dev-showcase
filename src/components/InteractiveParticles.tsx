import { useEffect, useRef } from 'react';

const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      orbitRadius: number;
      angle: number;
      angularSpeed: number;
      radius: number;
      color: string;
      speed: number;
    }> = [];

    // Light blue and bluish shades with medium opacity (0.45 to 0.6)
    const colors = [
      'rgba(59, 130, 246, 0.55)',  // Royal Blue
      'rgba(6, 182, 212, 0.5)',    // Cyan
      'rgba(96, 165, 250, 0.48)',  // Light Blue
      'rgba(37, 99, 235, 0.52)',   // Medium Blue
      'rgba(147, 197, 253, 0.45)', // Sky Blue
      'rgba(29, 78, 216, 0.5)'     // Darker Blue
    ];

    const particleCount = 200;

    // Target represents the gravitational center
    const target = {
      x: width / 2,
      y: height / 2,
      currentX: width / 2,
      currentY: height / 2
    };

    const mouse = {
      x: null as number | null,
      y: null as number | null
    };

    for (let i = 0; i < particleCount; i++) {
      const orbitRadius = Math.random() * 250 + 40;
      const angle = Math.random() * Math.PI * 2;
      particles.push({
        x: target.x + Math.cos(angle) * orbitRadius,
        y: target.y + Math.sin(angle) * orbitRadius,
        targetX: target.x,
        targetY: target.y,
        orbitRadius,
        angle,
        angularSpeed: (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.05 + 0.02 // ease follow speed
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Track mouse position only if it is within bounds of the canvas
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly move the gravity center to the mouse or back to screen center
      if (mouse.x !== null && mouse.y !== null) {
        target.currentX += (mouse.x - target.currentX) * 0.08;
        target.currentY += (mouse.y - target.currentY) * 0.08;
      } else {
        // Slowly float the center in an organic path when mouse is away
        const time = Date.now() * 0.001;
        const centerX = width / 2 + Math.sin(time * 0.5) * 50;
        const centerY = height / 2 + Math.cos(time * 0.3) * 30;
        target.currentX += (centerX - target.currentX) * 0.05;
        target.currentY += (centerY - target.currentY) * 0.05;
      }

      particles.forEach((p) => {
        // Increment orbit angle
        p.angle += p.angularSpeed;

        // Calculate orbit position around the moving gravitational center
        const orbitX = target.currentX + Math.cos(p.angle) * p.orbitRadius;
        const orbitY = target.currentY + Math.sin(p.angle) * p.orbitRadius;

        // Smoothly pull particle toward its target orbit location (ease force)
        p.x += (orbitX - p.x) * p.speed;
        p.y += (orbitY - p.y) * p.speed;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default InteractiveParticles;
