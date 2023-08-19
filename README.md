
# Flight Management Microservices - API Gateway

This repository contains the code for the API Gateway component of the Flight Management microservices project. The API Gateway is designed to centralize incoming requests and efficiently route them to the respective microservices. It serves as a single entry point, applying rate limiting and proxy middleware to enhance security and manage traffic effectively

## Table of Contents

**Description**

**Features**

**Technologies Used**

**Usage**

## Description

The API Gateway plays a crucial role in the Flight Management microservices project. It acts as a central hub for handling incoming requests from clients, routing them to the appropriate microservices based on the request path and method. This centralization improves scalability, simplifies authentication and rate limiting, and provides a layer of security by hiding the internal microservices structure.


## Features

- Centralized entry point for incoming requests.
- Efficient routing of requests to respective microservices.
- Rate limiting to prevent abuse and ensure fair usage.
- Proxy middleware for handling authentication and security.
- Simplified client interaction with a unified API interface.



## Technologies Used

- JavaScript
- Node.js
- Express
- npm (Node Package Manager)
- Custom Middleware (Rate limiting, Proxy)


## Usage

- Configure the microservices endpoints in the .env file.
- Customize rate limiting and security settings as needed.
- Start the API Gateway server: npm start
- The API Gateway will be accessible at http://localhost:3000 by default.
```

