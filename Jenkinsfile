pipeline{
    agent none
    
    stages{
        stage("Preperation"){
            agent {
                label "jenkins-slave-1"
            }   
            steps{
                sh "npm -v"
            }
            post{
                always{
                    echo "Done"
                }
                success{
                    echo "Prep Successfuls"
                }
                failure{
                    echo "you failed"
                }
            }
        }
        stage("sonarqube")
        {
            environment{
                SCANNER_HOME = tool 'SonarQubeScanner'
                PROJECT_NAME = 'sonarqube'
            }
            steps{
               withSonarQubeEnv('sonarqube')
                sh "$SCANNER_HOME/bin/sonar-scanner"
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
