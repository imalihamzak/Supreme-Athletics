import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 2, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Reset count when element enters view
    if (isInView) {
      setCount(0);
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = end * easeOutQuart;
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [isInView, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default CountUp;

