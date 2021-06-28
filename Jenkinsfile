pipeline{
    agent none
    
    stages{
        stage("Preperation"){
            agent {
                label "jenkins-slave-1"
            }   
            steps{
                sh "ls"
            }
            post{
                always{
                    echo "Done"
                }
                success{
                    echo "Prep Successful"
                }
                failure{
                    echo "you failed"
                }
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