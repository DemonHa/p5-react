import React, { memo, useEffect, useRef } from "react";
import P5 from "p5";

declare global {
  interface Window {
    p5: P5;
  }
}

type SketchI = {
  sketch: (...args: any[]) => any;
  setup: (p5: P5, containerRef: HTMLDivElement) => void;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Sketch = memo(({ sketch: propSketch, setup, ...props }: SketchI) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = new P5((p5: P5) => {
      window.p5 = p5;
      propSketch(p5);
      p5.setup = () => {
        setup(p5, containerRef.current!);
      };
    }, containerRef.current!);

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={containerRef} {...props} />;
});

export default Sketch;
