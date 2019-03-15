pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "my-app:build-${env.BUILD_ID}"
    }
    stages {
        stage('Checkout'){
            'echo cloning the project'
            checkout scm
        }
        stage('Docker Image Build') {
            'echo Creating docker image'
            docker.build("${env.DOCKER_IMAGE_TAG}",  '-f ./Dockerfile .')
        }
        stage('Build - checks lint'){
            'echo building the app'
            steps {
                sh '''
                docker run -it --rm "${env.DOCKER_IMAGE_TAG}"
                '''
            }
        }
        stage('Unit Tests'){
            echo 'Running unit tests'
            steps {
                sh '''
                docker run -it --rm "${env.DOCKER_IMAGE_TAG}" "npm run unit-test"
                '''
            }
        }
    }
}
