import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-5">People</h1>

        <div className="col-6 text-center p-5 mt-5">
          <img
            src="media/images/Avi.jpeg"
            alt="CEO"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-3">Avinash Kadam</h4>
          <h6 className="text-muted">FullStack Developer</h6>
        </div>
        <div className="col-6 text-muted p-5 mt-5" style={{ lineHeight: "1.8em" }}>
  <p>
    Avinash Kadam is a skilled MERN stack developer passionate about building
    scalable and high-performance web applications. With expertise in 
    MongoDB, Express.js, React, and Node.js, he enjoys crafting seamless 
    user experiences.
  </p>
  <p>
    He constantly explores new technologies and stays updated with the latest
    trends in web development.
  </p>
  <p>Coding and problem-solving are his zen.</p>
  <p>
    Connect on <a href="https://github.com/avinashkadam10">GitHub</a> / <a href="https://www.linkedin.com/in/avinashkadam10/">LinkedIn</a> 
  </p>
</div>

      </div>
    </div>
  );
}

export default Team;
