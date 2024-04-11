import Courses from "./Components/Courses/Courses";

function App() {

  return (
    <>
      <div className="w-10/12 mx-auto mt-4">
        <h1 className="text-[28px] text-[#1C1B1B] font-bold text-center">Course Registration</h1>
        <main>
          <Courses/>
        </main>
      </div>
    </>
  );
}

export default App
