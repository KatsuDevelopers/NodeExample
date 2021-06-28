pipeline{
    agent none
    
    stages{
        agent {
            label "jenkins-slave-1"
        }   
        stage("Preperation"){
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
            steps{
                script {
                    def scannerHome = tool 'sonarqube';
                    withSonarQubeEnv('sonarqube'){
                        sh "${tool("sonarqube")}/bin/sonar-scanner -Dsonar.projectKey=sonarqube -Dsonar.sources=. -Dsonar.login=admin -Dsonar.password=abcd@1234 -Dsonar.host.url=http://46.101.48.57/sonar"
                    }
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
