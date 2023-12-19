import data from "/data/students.json";
import styles from "/src/App.module.css";

function StudentList() {
  return (
    <>
      <div className={styles.title}>STUDENT DETAILS</div>
      {data.map((student) => (
        <div className={styles.inner}>
          <ul className={styles.outer}>
            <li className={styles.student_name}>{student.name}</li>
            <li className={styles.detail}>id :{student.id}</li>
            <li className={styles.detail}>age :{student.age}</li>
            <li className={styles.detail}>course : {student.courses[0]}</li>
            <li className={styles.detail}>course : {student.courses[1]}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
export default StudentList;
