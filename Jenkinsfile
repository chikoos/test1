pipeline {
    agent any
    stage('Checkout'){
        'echo cloning the project'
        checkout scm
    }
    stage('Docker Image Build') {
        'echo Creating docker image'
        docker build -t node-app:${BUILD_NUMBER} .
    }
    stage('Build - checks lint'){
        'echo building the app'
        docker run -it node-app:${BUILD_NUMBER}
    }
    stage('Unit Tests'){
        echo 'Running unit tests'
        docker run -it node-app:${BUILD_NUMBER} npm run unit-test
    }
}
