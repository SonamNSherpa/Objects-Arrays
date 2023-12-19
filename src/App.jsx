import styles from "./App.module.css";

import StudentList from "./components/StudentList.jsx";
import { CourseList } from "./components/CourseList.jsx";
import { GetCourseList } from "./components/CourseList.jsx";

function App() {
  let filteredCourseList = null;
  function handleSubmit() {
    const instName = document.getElementById("instName").value;
    console.log(instName);

    filteredCourseList = GetCourseList(instName);
  }
  return (
    <>
      {/* <input
        id="instName"
        name="instName"
        placeholder="Instructor Name"
        className={styles.input}
      ></input> */}

      {/* <button onClick={handleSubmit}>Submit</button> */}
      <div className={styles.inner}>
        <div>
          <StudentList />
        </div>
        <div>
          <CourseList />
        </div>
        <div>
          <GetCourseList />
        </div>
        <div>{filteredCourseList}</div>
      </div>
    </>
  );
}
export default App;
