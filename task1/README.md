## Lab 08 Advanced JS - Task1 

## Student
Name: Kaldybay Aliyanur
Date: 20.03.2026

## Overview
In this task, I implemented the Flyweight design pattern to efficiently render a large number of trees (10,000+) on a canvas without performance issues.

## Structure
- `FlyweightTree.js` – defines shared tree properties  
- `TreeFactory.js` – creates and reuses tree objects  
- `ForestRenderer.js` – generates and renders trees  

## Result
The system renders 10,000 trees efficiently using only a few shared objects.

## Benchmark
- Without Flyweight: 10,000 objects created  
- With Flyweight: only a few shared objects reused  
- Memory usage is significantly reduced  

## Conclusion
The Flyweight pattern is useful when working with a large number of similar objects. It improves performance and reduces memory consumption.