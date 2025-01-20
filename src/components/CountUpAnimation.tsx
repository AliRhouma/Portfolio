import React, { useEffect, useRef, useState } from 'react';
import { useInView } from './useInView';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function CountUpAnimation({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0
}: CountUpAnimationProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, 0.5); // Increased threshold for better visibility
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function (easeOutExpo)
        const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = easing * end;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}