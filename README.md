# p5-react

P5 wrapper for React.js application

# Installation

For npm users:

```
npm i p5-react
```

For yarn users:

```
yarn add p5-react
```

Usage

```typescript
import P5 from "p5";
import { Sketch } from "p5-react";

const setup = (p5: P5, canvasRef: HTMLDivElement) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
}

const sketch = (p5: P5) => {
    p5.draw = () => {
        // Draw
    }
}

const Component = () => {
    return <Sketch setup={setup} sketch={sketch}>
}
```

Note:
