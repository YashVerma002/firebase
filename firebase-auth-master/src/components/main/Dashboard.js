import React from "react";
import styles from ".components/main/Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
      <p>This is your dashboard where you can manage your plants and view insights.</p>
    </div>
  );
}

export default Dashboard;
