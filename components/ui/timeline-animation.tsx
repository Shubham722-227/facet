"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * TimelineContent polymorphic animation component
 * Tracks viewport entry using IntersectionObserver and applies stagger delays
 */
export function TimelineContent({
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className = "",
  style = {},
  children,
  ...props
}) {
  const localRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = (timelineRef && timelineRef.current) || localRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [timelineRef]);

  // Compute transition styles based on customVariants or defaults
  const delay = animationNum * 0.25; // staggered delay in seconds
  const duration = 0.55;

  const animatedStyle = {
    ...style,
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter ${duration}s ease-out ${delay}s`,
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0px)" : "translateY(-16px)",
    filter: isInView ? "blur(0px)" : "blur(8px)",
    willChange: "transform, opacity, filter",
  };

  return (
    <Component
      ref={localRef}
      className={className}
      style={animatedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

export default TimelineContent;
