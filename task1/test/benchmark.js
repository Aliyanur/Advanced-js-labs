// benchmark.js
// Compare Flyweight vs Non-Flyweight memory usage

import { FlyweightTree } from "../tree/FlyweightTree.js";
import treeFactory from "../tree/TreeFactory.js";

// ---------- WITHOUT FLYWEIGHT ----------
function testWithoutFlyweight(count = 10000) {

console.log("Testing WITHOUT Flyweight...");

const trees = [];

const start = performance.now();

for (let i = 0; i < count; i++) {

const tree = new FlyweightTree(
"pine",
"Pine",
"#228B22",
"#8B4513",
80,
30
);

trees.push({
tree,
x: Math.random()*800,
y: Math.random()*600
});

}

const end = performance.now();

console.log("Objects created:", trees.length);
console.log("Time:", (end-start).toFixed(2),"ms");

return trees;

}


// ---------- WITH FLYWEIGHT ----------
function testWithFlyweight(count = 10000) {

console.log("Testing WITH Flyweight...");

const trees = [];

const start = performance.now();

for (let i = 0; i < count; i++) {

const flyweight = treeFactory.getTree(
"pine",
"Pine",
"#228B22",
"#8B4513",
80,
30
);

trees.push({
flyweight,
x: Math.random()*800,
y: Math.random()*600
});

}

const end = performance.now();

console.log("Trees created:", trees.length);

console.log("Factory stats:", treeFactory.getStats());

console.log("Time:", (end-start).toFixed(2),"ms");

return trees;

}


// ---------- RUN BENCHMARK ----------

console.log("===== MEMORY BENCHMARK =====");

const normal = testWithoutFlyweight(10000);

const flyweight = testWithFlyweight(10000);

console.log("Normal objects:", normal.length);
console.log("Flyweight objects:", flyweight.length);

console.log("Benchmark finished");