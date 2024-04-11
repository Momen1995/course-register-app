import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({ courseName }) => {
  return (
    <div className="w-1/4 bg-red-300">
      <h3>this is a bookmarks : {courseName.length}</h3>
      <ul className="list-decimal">
        {courseName.map((course) => (
          <Bookmark key={course.id} course={course}></Bookmark>
        ))}
      </ul>
    </div>
  );
};

export default BookMarks;