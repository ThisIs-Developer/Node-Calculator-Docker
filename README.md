# Node Calculator
[![Apache 2.0 License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

This repository hosts a Node.js-based calculator application designed to perform basic arithmetic operations and additional functionalities.

## View the Docker image on [Docker Hub](https://hub.docker.com/r/baivabsarkar/calculator).

## Project Overview

### Features

- **Basic Operations**: Perform addition, subtraction, multiplication, and division.
- **Extended Features**:
  - **Percentage Calculation**: Easily compute percentages of numbers.
  - **Sign Toggle (+/-)**: Change the sign of the current input number.

## UI 🌐 [Live View](https://nodecalculator.vercel.app/)
### Tablet
<img src="assets\web.png">

### Mobile
<img src="assets\mobile.png">

### Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Minimalist web framework for Node.js used for handling HTTP requests and responses.
- **HTML/CSS**: Frontend components for user interface design and styling.
- **Docker**: Containerization technology for seamless deployment across different environments.

## Running Locally

To run the calculator application locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ThisIs-Developer/Node-Calculator-Docker.git
   cd Node-Calculator-Docker
   ```

2. **Install Dependencies**:

   Ensure Node.js and npm are installed on your machine. Then, install project dependencies:

   ```bash
   npm install
   ```

3. **Start the Server**:

   Launch the Node.js server to run the application locally:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## Docker Deployment

For easy deployment and scalability, the calculator application can be deployed using Docker.

### Prerequisites

- Docker installed on your machine. [Download Docker](https://www.docker.com/get-started).

### Steps to Deploy with Docker

1. **Pull the Docker Image**:

   Pull the pre-built Docker image from Docker Hub:

   ```bash
   docker pull baivabsarkar/calculator:latest
   ```
   
   View the Docker image on [Docker Hub](https://hub.docker.com/r/baivabsarkar/calculator).

2. **Run the Docker Container**:

   Start the Docker container to run the application:

   ```bash
   docker run -p 3000:3000 baivabsarkar/calculator:latest
   ```

3. **Access the Application**:

   Open your web browser and navigate to `http://localhost:3000` to interact with the calculator application.

## Contributing

Contributions are welcome! Fork the repository, make improvements, and submit a pull request. For major changes, please open an issue first to discuss potential updates.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

[license-shield]: https://img.shields.io/badge/License-Apache%202.0-red.svg
[license-url]: https://github.com/ThisIs-Developer/Node-Calculator-Docker/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/baivabsarkar/