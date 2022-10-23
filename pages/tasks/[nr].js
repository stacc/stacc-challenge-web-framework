import Link from "next/link";
import { getTasks } from "../../components/Tasks";
import styles from "../../styles/Tasks.module.css";

export default function Tasks({ nr, tasksLength }) {
  const task = getTasks().find((task) => task.id === nr);
  return (
    <div>
      <div className={styles.taskContainer}>{task.Component} </div>
      <div className={styles.buttonContainer}>
        {nr > 1 && (
          <Link href={`/tasks/${nr - 1}`} passHref>
            <a className={styles.button}>Previous task</a>
          </Link>
        )}
        {nr === 1 && (
          <Link href={`/`} passHref>
            <a className={styles.button}>Task list</a>
          </Link>
        )}
        {nr !== tasksLength && (
          <Link href={`/tasks/${nr + 1}`} passHref>
            <a className={styles.button}>Next task</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const tasks = getTasks();
  const task = tasks.find((task) => task.id === parseInt(params.nr));
  const tasksLength = tasks.length;
  const nr = parseInt(params.nr);

  return {
    props: { pageTitle: task.title, nr, tasksLength },
  };
}
