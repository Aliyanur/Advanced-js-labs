## LAB 09 - Task 1

## Student
Name: Kaldybay Aliyanur
Date: 27.03.2026

## Overview
In this task, I implemented the Observer(Pub/Sub) pattern using an EventBus.
The system simulates a news aggregator where publishers send news and subscribers receive updates.

## How it works
EvenBus works as a central message broker, NewsPublisher publishes news by category (sport, tech, etc.), subscribers (Email, Push) listen to selected topics, components are decoupled (no direct connection).