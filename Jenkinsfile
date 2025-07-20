pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = "deal-dresser"
        DOCKER_CONTAINER_NAME = "deal-dresser-app"
        // Note: Jenkins is running on port 8080. We'll use 8081 for the application.
        APP_PORT = 8081
    }

    stages {
        stage('Checkout') {
            steps {
                // This will check out the code from the repository that triggered the pipeline
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building the Docker image..."
                    bat "docker build -t ${DOCKER_IMAGE_NAME} ."
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    echo "Deploying the application..."
                    // Stop and remove any existing container with the same name
                    bat "docker stop ${DOCKER_CONTAINER_NAME} || true"
                    bat "docker rm ${DOCKER_CONTAINER_name} || true"

                    // Run the new container
                    bat "docker run -d -p ${APP_PORT}:80 --name ${DOCKER_CONTAINER_NAME} ${DOCKER_IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
