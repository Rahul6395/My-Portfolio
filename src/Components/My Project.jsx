import React from 'react';
import "./My Project.css";


const MyProject = () => {
    return (
        <>
       <div className="myProject">
               <h1 className="myProjectHeading">My Projects</h1>
               <div className="myProjectContainer">
                
                <div className="projectBox">
                 <a href="https://github.com/Rahul6395/Create-Blog" className="projectGitLink">
                   <div className="projectLink" style={{  backgroundImage: "url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"}}>
                       <h2 className="projectName">Blogging Web Application</h2>
                       <p className="projectDes">You can login, register and logout in this web, in this you can create a blog. </p>
                    </div>  
                 </a>
                </div>

                <div className="projectBox">
                 <a href="https://github.com/Rahul6395/Gym-Website" className="projectGitLink">
                   <div className="projectLink" style={{  backgroundImage: "url(https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)"}}>
                       <h2 className="projectName">Gym Website</h2>
                       <p className="projectDes">This is a fitness website, its ui is very good and it is fully responsive. </p>
                    </div>  
                 </a>
                </div>

                <div className="projectBox">
                 <a href="https://github.com/Rahul6395/E-Commerce" className="projectGitLink">
                   <div className="projectLink" style={{  backgroundImage: "url(https://images.unsplash.com/photo-1608892711230-ffa1e7209012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)"}}>
                       <h2 className="projectName">E-Commerce UI</h2>
                       <p className="projectDes">This one page e commerce ui and it is full responsive its ui very attractive .</p>
                    </div>  
                 </a>
                </div>

                
              
           </div>
       </div>
        
        </>
    )
}

export default MyProject
