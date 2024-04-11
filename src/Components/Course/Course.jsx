const Course = ({course}) => {
  const { img, course_name, credit, price, detail } = course;
  return (
    <div>
      <img src={img} />
      <h2>{course_name}</h2>
      <p>{detail}</p>
      <div>
        <p>Price: {price}</p>
        <p>Credit: {credit}</p>
      </div>
    </div>
  );
};

export default Course;