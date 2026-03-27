## LAB 09 - Task 2

## Student
Name: Kaldybay Aliyanur
Date: 27.03.2026

## Overview
In this task, I implemented the MEdiator and Command patterns.
The system simulates a smart home where devices communicate through a mediator and actions are handles using commands.

## How it works
Mediator (HomeController) manages communication between devices, Devices (Light, etc.) do not talk directly to each other, Commands encapsulate actions (turn on/off), CommandManager supports undo functionality