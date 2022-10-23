import TLDR from "../TLDR";
import styles from "../../styles/Tasks.module.css";

export default function Task0() {
  return (
    <div>
      <TLDR>
        <p>
          <b>TLDR: </b>Do A, B and C
        </p>
      </TLDR>
      <br />
      <p className={styles.section}>
        Here I explain what you should do in this task.
      </p>

      <br />
      <br />
      <div className={styles.tasks}>
        <b>Tasks</b>
        <ul className={styles.listWithIconsPin}>
          <li>Do A</li>
          <li>Do B</li>
          <li>Do C</li>
        </ul>
      </div>
    </div>
  );
}
