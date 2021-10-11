const simplex = require('simplex-noise');

const array = n => Array.from(new Array(n));

const arcs = n => array(n).map((_, i) => i / n);

const arcs01 = n => Array(n).map((_, i) => (n <= 1 ? 0 : 1 / (n - 1)));

const scribble = (resolution = 1000) => {
    return arcs01(resolution).map(t => {
        const angle = t * Math.PI * 2;
        const freq = 1.0;
        const amplitude = 0.75;
        const x = Math.cos(angle) * freq;
        const y = Math.sin(angle) * freq;
        return [
            amplitude * simplex.noise3d(x, y, -1),
            amplitude * simplex.noise3d(x, y, 1)
        ];
    });
};

console.log(scribble);