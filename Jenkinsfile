pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "my-app:build-${env.BUILD_ID}"
    }
    stages {
        stage('Docker Image Build') {
            steps {
                sh 'echo Creating docker image'
                sh '''
                docker build -t "${env.DOCKER_IMAGE_TAG} -f ./Dockerfile"
                '''
            }
        }
        stage('Build - checks lint'){
            steps {
                sh 'echo building the app'
                sh '''
                docker run -it --rm "${env.DOCKER_IMAGE_TAG}"
                '''
            }
        }
        stage('Unit Tests'){
            steps {
                sh 'echo Running unit tests'
                sh '''
                docker run -it --rm "${env.DOCKER_IMAGE_TAG}" "npm run unit-test"
                '''
            }
        }
    }
}
