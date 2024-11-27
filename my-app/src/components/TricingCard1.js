import "./TricingCardStyle1.css";
import React from "react";
import { Link } from "react-router-dom";

const TricingCard1 = () => {
  return  (
    <div className="Tricing">
        <div className="card-container">
            <div className="card">
                <h3> Class X </h3>
                 <p>In class 10th, I known foundational knowledge in core subjects like Mathematics, Science, Social Studies, and Languages. They develop critical thinking, problem-solving, and analytical skills. This stage emphasizes understanding key concepts, preparing for board exams, and shaping career aspirations. It also fosters discipline, time management, and decision-making, building a strong academic base for higher education.</p>
                 
                
                <Link to="/Contact" className="btn">HIGHER EDUCATION
                </Link>
            </div>
            <div className="card">
                <h3>Class XII </h3>
                 
                <p>In class 12th, I am  study advanced topics in Physics, Chemistry, and Mathematics. They develop critical thinking, analytical problem-solving, and practical application skills. This academic stage builds a strong foundation for careers in engineering, technology, and sciences. It prepares students for competitive exams like JEE, fostering discipline, conceptual clarity, and a deeper understanding of real-world applications. </p>
                
                 
                <Link to="/Contact" className="btn">SECONDARY EDUCATION
                </Link>
            </div>
            <div className="card">
                <h3>B.Tech </h3>
                <p>I must focus on core subjects like Data Structures, Algorithms, Operating Systems, Computer Networks, Databases, and Programming Languages. Understanding Software Engineering, Artificial Intelligence, and Cybersecurity is crucial. Mastering coding, problem-solving, and system design is essential. Gaining practical experience through projects, internships, and competitive programming helps build strong technical skills  for industry demands. </p>
                 
                 
                <Link to="/Contact" className="btn">UNDERGRADUATION
                </Link>
            </div>

        </div>
    </div>
  );
};
  
 

export default TricingCard1;
 

 