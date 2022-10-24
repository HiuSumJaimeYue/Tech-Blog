# Tech-Blog
                
## Description   

This is a Tech Blog web application that allows user to comment on posts.         
When you open the Tech Blog web application, you can see the existing posts. 
If you log in, you can comment on the posts and add your own posts. Once you login, the session will time out in 10 minutes and prompt you to login again.     

The technologies we used in this project is Node.js, Express.js, Handlebars.js, MySql, Sequelize and Heroku.

Below are the links to the deployed application ,this repository and the repository that I created and used as starter code. Screenshots are shown in the Usage Section.

Deployed application: https://tech-blog-hiusumjaimeyue.herokuapp.com/        
GitHub repository: https://github.com/HiuSumJaimeYue/Tech-Blog          
Starter code Repository: https://github.com/HiuSumJaimeYue/just-tech-news

## Table of Contents               
-[Installation](#installation)          
-[Usage](#usage)          
-[License](#license)          
-[Contributing](#contributing)          
-[Tests](#tests)        
-[Questions](#questions)        

## Installation         
If you are setting the project up in your local computer, run "npm i" in your terminal after downloading the files. Then, set up your .env file, an example of .env file is in the Tests Section. Run "mysql -u root" in your terminal if you did not set up a password for mysql. If you set a password for mysql, type "mysql -u root -p " in your terminal and enter your password. After the terminal showed "mysql>", type "source db/schema.sql". Then, type "quit" to get out of mysql. Finally, type "npm start". To start the web application, go to your usual web browser and type "http://localhost:3000/". You will be able to see the Tech Blog web application.                

## Usage         
You can see a few blogs on the homepage.           
![Homepage Preview]( "Homepage Preview")                    
Anything you click on homepage except homepage itself, you will be redircted to the login Page.             
![Login Preview 1]( "Login Preview 1")              
If you want to signup instead, click on the button and you will be redirected to the signup Page.       

You can see the comments that were made on that blog if you clicked on "Comment here".            
![comment Preview 1]( "comment Preview 1")                      
If you logged in, you can even add your comments on the blog.                 
Here is the login Page.             
![loginPage Preview]( "loginPage Preview")           
This is how the comment page looks after loggin in.          
![Comment Preview 2]( "Comment Preview 2")      


## License         
&copy; 2022 by Hiu Sum Jaime Yue               

## Contributing         
Hiu Sum Jaime Yue -- Tech Blog          

## Tests         
The following is an example of .env file.           
// DB_PASSWORD is the password you set for your mysql.           
DB_NAME='tech_blog_db'          
DB_USER='root'              
DB_PASSWORD=''                  



## Questions         
If you have any questions about the project, 
the github link and email address of one of the authors are shown below.                   
Github: [Github](https://github.com/HiuSumJaimeYue) 
& Email: [hiusumjaimeyue@cmail.carleton.ca](mailto:hiusumjaimeyue@cmail.carleton.ca)
