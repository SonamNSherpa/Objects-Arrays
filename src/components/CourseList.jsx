import data from "/data/courses.json";
import styles from "/src/App.module.css";

function CourseList() {
  return (
    <>
      <div className={styles.title}>COURSE DETAILS</div>
      {data.map((course) => (
        <div className={styles.inner}>
          <ul className={styles.outer}>
            <li className={styles.student_name}>{course.name}</li>
            <li className={styles.detail}>id :{course.id}</li>

            <li className={styles.detail}>instructor: {course.instructor}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

function GetCourseList(value) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {data.map((course) => {
          if (course.name === value) {
            return (
              <ul className={styles.outer} key={course.id}>
                <div className={styles.inner}>
                  <li>{course.id}</li>
                  <li>{course.name}</li>
                  <li>{course.instructor}</li>
                </div>
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

// export default CourseList;
// export { GetCourseList };

export { CourseList, GetCourseList };
