import React from "react";
import "@testing-library/jest-dom";
import "jest-canvas-mock";
import { render } from "@testing-library/react";

import Sketch from "./../src";
import p5 from "p5";

describe("P5", () => {
  it("should call setup and sketch once", () => {
    const setup = jest.fn();
    const sketch = jest.fn();

    render(<Sketch setup={setup} sketch={sketch} />);

    expect(setup).toHaveBeenCalledTimes(1);
    expect(sketch).toHaveBeenCalledTimes(1);
  });

  it("should create canvas with class names and styles", () => {
    let parentDiv: HTMLDivElement;
    const setup = (p5: p5, parent: HTMLDivElement) => {
      p5.createCanvas(200, 200).parent(parent);
      parentDiv = parent;
    };
    const sketch = jest.fn();

    const { container } = render(
      <Sketch
        className="testClass"
        style={{ width: 100, height: 500 }}
        setup={setup}
        sketch={sketch}
      />
    );
    const canvas = container.querySelector("canvas");

    expect(canvas).toBeDefined();
    expect(container.firstChild).toHaveClass("testClass");
    expect(container.firstChild).toHaveAttribute(
      "style",
      "width: 100px; height: 500px;"
    );
  });
});
