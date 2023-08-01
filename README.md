# p5-react

P5 wrapper for React.js application

[![NPM Version](https://img.shields.io/npm/v/p5-react.svg?style=flat)]()
[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](https://github.com/DemonHa/p5-react/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/p5-react.svg)](https://www.npmjs.com/package/p5-react)
![example workflow](https://github.com/DemonHa/p5-react/actions/workflows/test.yml/badge.svg)

# Installation

For npm users:

```
npm i p5-react
```

For yarn users:

```
yarn add p5-react
```

# Quick Start

```typescript
import P5 from "p5";
import Sketch from "p5-react";

const setup = (p5: P5, canvasRef: HTMLDivElement) => {
  p5.createCanvas(500, 500).parent(canvasRef);
};

const sketch = (p5: P5) => {
  p5.draw = () => {
    // Draw
  };
};

const App = () => {
  return <Sketch setup={setup} sketch={sketch} />;
};

export default App;
```

Note: You can access p5 globally from other modules
