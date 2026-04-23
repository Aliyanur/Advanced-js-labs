## LAB 14 - TASK 1

## Student
Name: Kaldybay Aliyanur
Date: 22.04.2026

## Overview
This lab explores modern rendering architectures: Server-Side Rendering (SSR) and Islands Architecture. The goal is to understand how performance, interactivity, and JavaScript payloads are optimized in real-world applications.

A custom Node.js server was built to simulate SSR:
Server fetches user data asynchronously
HTML is generated dynamically on the server
Initial state is injected using window.__INITIAL_STATE__
Client-side JavaScript hydrates the static HTML