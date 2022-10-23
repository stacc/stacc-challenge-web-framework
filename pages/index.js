import styles from "../styles/Tasks.module.css";

export default function Home() {
  return (
    <div className={styles.taskContainer}>
      <h3>Welcome to this workshop made by STACC!💪</h3>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "STACC WORKSHOP",
    },
  };
}
