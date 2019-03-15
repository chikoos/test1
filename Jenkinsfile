pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "my-app:${BUILD_ID}"
    }
    stages {
        stage('Containerizing application') {
            steps {
                sh 'echo packaging application in a docker image'
                sh '''
                docker build -t ${DOCKER_IMAGE_TAG} .
                '''
            }
        }
        stage('Lint'){
            steps {
                sh 'echo checking linting'
                sh '''
                docker run --rm -i ${DOCKER_IMAGE_TAG} npm run lint
                '''
            }
        }
        stage('Code Quality - Coverage'){
            steps {
                sh 'echo checking code coverage'
                sh '''
                docker run --rm -i ${DOCKER_IMAGE_TAG} npm run cov
                '''
            }
        }
        stage('Unit test') {
            steps {
                sh 'echo unit test'
                sh '''
                docker run --rm -i ${DOCKER_IMAGE_TAG} npm run unit-test
                '''
            }
        }
    }
}
