import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/myapps" element={<Navigate replace to="/learn " />}></Route>
      <Route path="/learn" element={<Learn />}>
        <Route path="course" element ={<Courses />}>
          <Route path=":courseid" element= {<CourseId />}></Route>
        </Route>
      </Route>
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>I am home</h1>
      <NavLink className=" btn btn-success" to = "/myapps">My apps</NavLink>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn Component</h1>
      <h4>All of the courses</h4>
      <NavLink className="btn btn-primary" to="/home">Home</NavLink>
      <NavLink className="btn btn-primary" to = "/learn/course">Home</NavLink>
      <Outlet></Outlet>

    </div>
  );
}

function Courses(props) {
  const courseList =[
    "React",
    "Angular",
    "Vue",
    "Django"
  ];
  const randomCourseName = courseList[Math.floor(Math.random()*courseList.length)];
  const location = useLocation();
  return (
    <div>
      <h1>Courses</h1>
      <NavLink style ={(a)=>{
        console.log("printing the is Active status --->",location.pathname,`/learn/course/${randomCourseName}`)
        return {
          backgroundColor: location.pathname == `/learn/course/${randomCourseName}`? "pink" : "yellow",
        }
      }} className=" btn btn-success" to = {`/learn/course/${randomCourseName}`}>{randomCourseName}</NavLink>
      <Outlet></Outlet>
    </div>
  );
}
function Bundles() {
  return (
    <div>
      <h1>Bundles</h1>
      <NavLink className=" btn btn-success" to = "/myapps">My apps</NavLink>
    </div>
  );
}

function CourseId(){
  const {courseid} = useParams();
  return(
    <div>
      <h1>Course id is ----> {courseid}</h1>
    </div>
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
