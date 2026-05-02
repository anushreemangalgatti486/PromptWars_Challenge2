import React, { useEffect, useState } from 'react';

export default function SparkCursor() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    let sparkId = 0;

    const handleMouseMove = (e) => {
      // Create a new spark object on mouse move
      const newSpark = {
        id: sparkId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      setSparks((prevSparks) => [...prevSparks, newSpark]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup old sparks
    const interval = setInterval(() => {
      const now = Date.now();
      setSparks((prevSparks) => prevSparks.filter((spark) => now - spark.timestamp < 500));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute rounded-full bg-secondary shadow-[0_0_10px_2px_rgba(245,166,35,0.8)]"
          style={{
            left: spark.x,
            top: spark.y,
            width: '6px',
            height: '6px',
            transform: 'translate(-50%, -50%)',
            animation: 'sparkFade 0.5s ease-out forwards'
          }}
        />
      ))}
      <style>{`
        @keyframes sparkFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.1);
          }
        }
      `}</style>
    </div>
  );
}
