## LAB 14 - TASK 1

## Student
Name: Kaldybay Aliyanur
Date: 22.04.2026

## Overview
A static HTML page was created with isolated interactive components (“islands”):
Counter island (stateful increment/decrement)
Color picker island (UI interaction)

A custom engine:
Detects islands using data-island-type
Uses closure isolation to prevent global state pollution
Applies lazy hydration via IntersectionObserver