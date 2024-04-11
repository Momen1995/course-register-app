import BookMarks from "./Components/BookMarks/BookMarks";
import Courses from "./Components/Courses/Courses";

function App() {

  return (
    <>
      <div className="w-11/12 mx-auto py-4">
        <h1 className="text-[28px] text-[#1C1B1B] font-bold text-center">Course Registration</h1>
        <main className="flex gap-5 mt-6">
          <Courses/>
          <BookMarks/>
        </main>
      </div>
    </>
  );
}

export default App
