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
        stage("sonarqube"){
            environment{
                SCANNER_HOME = tool 'SonarQubeScanner'
                PROJECT_NAME = 'sonarqube'
            }
            steps{
                withSonarQubeEnv('sonarqube'){
                sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectKey=sonarqube -Dsonar.sources=. -Dsonar.login=admin -Dsonar.password=abcd@1234 -Dsonar.host.url=http://46.101.48.57/sonar"
                }
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
    }
}
