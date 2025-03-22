Description :  It is an innovative platform aimed at fostering collaboration and communication within the university community. It provides a centralized hub where students, faculty, and alumni can
                connect, share ideas, collaborate on projects, and seek mentorship. Through features like user profiles, messaging, discussion forums, and project sharing, the platform enables
                users to engage with each other, access resources, and build meaningful connections. Whether it's seeking advice from seniors, networking with peers, or showcasing projects, 
                the platform offers a dynamic environment for learning, collaboration, and community building.

CI/CD pipeline description : 

Code push on main branch --> triger the workflow with github action --> perform code analysis using sonarqube --> build the code --> push artifacts on ECR --> scan the image using trivy --> update the image version in helm chart --> it will trigger the argocd --> deploy the updated image to kops cluser 
