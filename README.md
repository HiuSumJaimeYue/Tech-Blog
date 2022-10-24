# Tech-Blog
                
## Description   

This is a Tech Blog web application that allows user to comment on posts.         
When you open the Tech Blog web application, you can see the existing posts. 
If you log in, you can comment on the posts and add your own posts. Once you login, the session will time out in 10 minutes and prompt you to login again.     

The technologies we used in this project is Node.js, Express.js, Handlebars.js, MySql, Sequelize and Heroku.

Below are the links to the deployed application ,this repository and the repository that I created and used as starter code. Screenshots are shown in the Usage Section.

Deployed application: https://new-tech-blog-hiusumjaimeyue.herokuapp.com/        
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
![Homepage Preview](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/HomepagePreview.jpg "Homepage Preview")                    
Anything you click on homepage except homepage itself, you will be redircted to the login Page.             
![Login Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/LoginPagePreview.jpg "Login Preview 1")              
If you want to signup instead, click on the button and you will be redirected to the signup Page.       
![Signup Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/SignupPagePreview.jpg "Signup Preview 1")    
After successfully signup or login, you will see the Dashboard Page.                
![Dashboard Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/DashboardPagePreview.jpg "Dashboard Page Preview 1")                        
You can click on Add New Post, you will see the add Page.            
![Add Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/AddPagePreview.jpg "Add Preview 1")              
After you created the new post, you will be redirected back to Dashboard page. And now you can see your new post.               
![New-Dashboard Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/NewDashboardPagePreview.jpg "New-Dashboard Preview 1")              
If you want to change of your posts, click on them in Dashboard page and you will be redirected to Edit-post page. And Now you can make your changes.           
After finished editing, do not forget to push the update button or you can decide to delete the post or leave a comment below.            
![Edit Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/EditPagePreview.jpg "Edit Preview 1")                                   
This is how the comment page if you click on the title of the post in homepage.          
![Comment Preview 1](https://github.com/HiuSumJaimeYue/Tech-Blog/blob/main/Screenshots/CommentPagePreview.jpg "Comment Preview 1")      


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
