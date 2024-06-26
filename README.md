﻿# Intelligent Vehicle Counting System

This repository contains a case study and implementation details of an intelligent vehicle counting system designed for managing traffic congestion using computer vision algorithms.

## Problem Statement

Congested traffic is a persistent issue, especially in urban areas like those surrounding Universiti Putra Malaysia (UPM). Manual traffic management by police officers during peak hours is inefficient and labor-intensive. An automated system is needed to accurately count vehicles and optimize traffic flow.

## Proposed Solution

To address the problem, we propose a vehicle counting system utilizing YOLO (You Only Look Once) for object detection and the SORT (Simple Online and Realtime Tracking) algorithm for tracking. This combination allows real-time counting and tracking of vehicles in congested traffic scenarios.

## Implementation Details

### YOLO (You Only Look Once)

- **Functionality**: YOLO is an object detection algorithm capable of identifying and classifying multiple objects within images or video frames.
- **Advantages**: High-speed and accurate detection suitable for real-time applications, even in complex environments.
- **Limitations**: Requires substantial computational resources for real-time processing and can be sensitive to varying lighting conditions.

### SORT (Simple Online and Realtime Tracking)

- **Functionality**: SORT tracks objects across frames using the Kalman filter and the Hungarian algorithm, maintaining object identities over time.
- **Advantages**: Efficient and effective in real-time tracking scenarios, handles occlusions well, and performs with high accuracy.
- **Limitations**: Performance may degrade in densely packed traffic scenarios with overlapping vehicles.

## Algorithm Suitability

The YOLO and SORT algorithms were chosen for their robust performance in real-time vehicle counting and tracking. Here’s how they work together:

1. **Video Input**: Live video feed from traffic cameras captures the scene.
2. **Vehicle Detection with YOLO**: Each frame is processed to detect and classify vehicles.
3. **Vehicle Tracking with SORT**: SORT utilizes detections from YOLO to track vehicles across frames, assigning unique IDs to each vehicle.
4. **Counting Vehicles**: The system maintains a count of vehicles, updating as vehicles enter and exit the frame.

## Benefits

- **Accuracy**: YOLO ensures precise vehicle detection, while SORT maintains reliable tracking of vehicle movements.
- **Real-Time Processing**: Both algorithms are optimized for real-time performance, making them suitable for dynamic traffic environments.
- **Scalability**: The system can scale to handle varying traffic loads and is adaptable for deployment in larger urban areas.
- **Reduced Manual Intervention**: Automation reduces the need for manual traffic management, allowing personnel to focus on other critical tasks.

For more details, visit the [project website]([https://your-project-website-url](https://github.com/shahrul-amin/vehicle-counting)) or explore the referenced algorithms:
- [YOLO](https://pjreddie.com/yolo/)
- [SORT](https://www.luffca.com/2023/04/multiple-object-tracking-sort/)

