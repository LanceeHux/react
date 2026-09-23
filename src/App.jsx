import { useState, useEffect } from "react"

export default function App() {
  const styles = {
    header: "p-5 shadow-xl flex flex-row justify-between",
    headerTitle: "text-xl [font-weight:bold]",
    headerBtns: "flex gap-3",
    headerBtn: "hover:bg-black hover:text-white [transition:0.3s_ease] p-2 rounded-sm"
  }
  return (
    <>
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Lezada</h1>
      <div className={styles.headerBtns}>
        <a href="#" className={styles.headerBtn}>Dashboard</a>
        <a href="#" className={styles.headerBtn}>My Cart</a>
        <a href="#" className={styles.headerBtn}>Profile</a>
      </div>
    </header>
    </>
  )
}