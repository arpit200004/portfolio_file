/* CUSTOMIZATION GUIDE
====================================================
⭐ STAR BACKGROUND SYSTEM

--star-color: Base color of stars
--star-glow: Star glow color (outer glow)
--meteor-color: Color of meteor trail
--background-gradient: Background gradient overlay
--twinkle-duration: Speed of star twinkle
--meteor-duration: Speed of meteors
--meteor-delay: Max delay between meteors

🎨 HOW TO CUSTOMIZE:
- Replace colors in :root with your theme palette.
- Adjust star size & density in generateStars().
- Modify animation keyframes for crazier or calmer effects.
====================================================
*/

import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 9000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 6 + 3,
        animationDelay: Math.random() * 5,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 5;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 2 + 4,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-black via-[#0a0a2e] to-black">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.animationDelay + "s",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}

      <style jsx>{`
        :root {
          --star-color: #ffffff;
          --star-glow: rgba(255, 255, 255, 0.7);
          --meteor-color: linear-gradient(90deg, #fff, #38bdf8, transparent);
          --twinkle-duration: 4s;
          --meteor-duration: 5s;
          --meteor-delay: 12s;
        }

        .star {
          position: absolute;
          border-radius: 50%;
          background: var(--star-color);
          box-shadow: 0 0 6px var(--star-glow);
          animation: twinkle var(--twinkle-duration) infinite ease-in-out,
            scalePulse var(--twinkle-duration) infinite alternate;
        }

        .meteor {
          position: absolute;
          background: var(--meteor-color);
          border-radius: 9999px;
          transform: rotate(-20deg);
          filter: blur(0.8px);
          animation: meteor var(--meteor-duration) linear infinite;
        }

        /* Animations */
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes scalePulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.3);
          }
        }

        @keyframes meteor {
          0% {
            transform: translate3d(0, 0, 0) rotate(-20deg);
            opacity: 1;
          }
          100% {
            transform: translate3d(-600px, 600px, 0) rotate(-20deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};