pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "my-app:${BUILD_ID}"
    }
    stages {
        stage('Docker Image Build') {
            steps {
                sh 'echo Creating docker image'
                sh '''
                docker build -t ${DOCKER_IMAGE_TAG} .
                '''
            }
        }
        stage('Build - checks linting'){
            steps {
                sh 'echo building the app'
                sh '''
                docker run -it --rm ${DOCKER_IMAGE_TAG}
                '''
            }
        }
        stage('Unit Tests'){
            steps {
                sh 'echo Running unit tests'
                sh '''
                docker run -it --rm ${DOCKER_IMAGE_TAG} "npm run unit-test"
                '''
            }
        }
    }
}
