import React, { memo, useEffect, useRef } from "react";
import P5 from "p5";

declare global {
  interface Window {
    p5: P5;
  }
}

interface SketchI {
  className?: string;
  style?: React.CSSProperties;
  sketch: (...args: any[]) => any;
  setup: (p5: P5, containerRef: HTMLDivElement) => void;
}

const Sketch = memo(({ className, style, setup, ...props }: SketchI) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = new P5((p5: P5) => {
      window.p5 = p5;
      props.sketch(p5);
      p5.setup = () => {
        setup(p5, containerRef.current!);
      };
    }, containerRef.current!);

    return () => {
      sketch.remove();
    };
  }, []);

  return (
    <div ref={containerRef} style={style} className={className ?? ""}></div>
  );
});

export default Sketch;
