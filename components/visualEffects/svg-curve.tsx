'use client'
import { useEffect, useRef, useCallback } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  const reqId = useRef<number | null>(null); // Use useRef to manage reqId

  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;

  const animateIn = useCallback(() => {
    // If the animationOut is running, cancel it and reset time
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
      time = Math.PI / 2;
    }

    setPath(progress);

    reqId.current = requestAnimationFrame(animateIn);
  }, [progress]);

  const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { movementY, clientX } = e;

    const box = (e.target as HTMLElement).getBoundingClientRect(); // Specify the type for e.target

    x = (clientX - box.left) / box.width;

    progress += movementY;
  };

  const resetAnimation = () => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
    }
    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = useCallback(() => {
    let newProgress = progress * Math.sin(time);

    setPath(newProgress);

    progress = lerp(progress, 0, 0.04);

    time += 0.2;

    if (Math.abs(progress) > 0.5) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      time = Math.PI / 2;
      progress = 0;
    }
  }, [progress]);

  const setPath = (value: number) => {
    const width = window.innerWidth * 0.7;

    path.current?.setAttributeNS(
      null,
      "d",
      `M 0 50 Q ${width * x} ${50 + value} ${width} 50`
    );
  };

  useEffect(() => {
    setPath(progress);

    const handleResize = () => {
      setPath(progress);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (reqId.current !== null) {
        cancelAnimationFrame(reqId.current);
      }
    };
  }, [progress]);

  return (
    <div className="line">
      <span
        onMouseEnter={() => {
          animateIn();
        }}
        onMouseLeave={() => {
          resetAnimation();
        }}
        onMouseMove={manageMouseMove}
        className="box"
      ></span>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
