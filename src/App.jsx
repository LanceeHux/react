import { useState, useEffect } from "react"

export default function App() {
  const styles = {
    header: "p-5 shadow-xl flex flex-row justify-between",
    headerTitle: "text-xl [font-weight:bold]",
    headerBtns: "flex gap-3",
    headerBtn: "hover:bg-black hover:text-white [transition:0.3s_ease] p-2 rounded-sm",
    section: "min-h-screen justify-center items-center flex",
    itemList: "p-3 flex gap-2 shadow-xl",
    itemCard: "p-2 rounded-md flex flex-col shadow-md",
    itemPrice: "text-[#ffcd00]/90 [font-weight:bold]",
    itemDesc: "text-[60%]"
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

    <section className={styles.section}>
      <div>
        <h2 className={styles.headerTitle}>Top Item Sales / Popular</h2>
        <div className={styles.itemList}>
        <div className={styles.itemCard}>
            <span>Keychain Dog</span>
            <code className={styles.itemPrice}>$9.81</code>
            <p className={styles.itemDesc}>A cute fancy keychain for everyone, for bag, unisex.</p>
          </div>
          <div className={styles.itemCard}>
            <span>Keychain Dog</span>
            <code className={styles.itemPrice}>$9.81</code>
            <p className={styles.itemDesc}>A cute fancy keychain for everyone, for bag, unisex.</p>
          </div>
          <div className={styles.itemCard}>
            <span>Keychain Dog</span>
            <code className={styles.itemPrice}>$9.81</code>
            <p className={styles.itemDesc}>A cute fancy keychain for everyone, for bag, unisex.</p>
          </div>
          <div className={styles.itemCard}>
            <span>Keychain Dog</span>
            <code className={styles.itemPrice}>$9.81</code>
            <p className={styles.itemDesc}>A cute fancy keychain for everyone, for bag, unisex.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}