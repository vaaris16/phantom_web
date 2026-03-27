import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      pos.current.x = mouse.current.x;
      pos.current.y = mouse.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999 will-change-transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="absolute left-1/2 top-1/2 w-14 h-14 blur-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--neon-pink) opacity-100" />
      <div className="absolute left-1/2 top-1/2 w-10 h-10  blur-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-100" />

      <div className="absolute left-1/2 top-1/2 w-2 h-2  -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-100" />
      <div className="absolute left-1/2 top-1/2 w-4 h-4  blur-sm -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--cyan) opacity-100" />
    </div>
  );
}
