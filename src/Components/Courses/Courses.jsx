import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourseName }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 w-3/4">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleCourseName={handleCourseName}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;