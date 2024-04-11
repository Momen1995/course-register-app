const Bookmark = ({course}) => {

  const {course_name} = course
  return (
    <div>
      <li>{course_name}</li>
    </div>
  );
};

export default Bookmark;