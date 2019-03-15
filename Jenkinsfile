pipeline {
    agent any
    stage('Checkout'){
        'echo cloning the project'
        checkout scm
    }
    stage('Docker Image Build') {
        'echo Creating docker image'
        sh("docker build -t node-app-${BUILD_NUMBER} -f ./Dockerfile)
    }
    stage('Build - checks lint'){
        'echo building the app'
        sh("docker run -it node-app-${BUILD_NUMBER})
    }
    stage('Unit Tests'){
        echo 'Running unit tests'
        sh("docker run -it node-app-${BUILD_NUMBER} npm run unit-test)
    }
}
