import { useState, useEffect } from "react"

export default function App() {
  const styles = {
    header: "p-5 shadow-xl flex flex-row justify-between",
    headerTitle: "text-xl [font-weight:bold]",
    headerBtns: "flex gap-3",
    headerBtn: "hover:bg-black hover:text-white [transition:0.3s_ease] p-2 rounded-sm",
    section: "min-h-screen justify-center flex mt-2 w-full",
    itemList: "p-3 grid md:grid-cols-5 sm:grid-cols-3 gap-2 shadow-xl w-full",
    itemCard: "p-2 rounded-md flex flex-col shadow-md",
    itemPrice: "text-[#FFC0CB] [font-weight:bold]",
    itemDesc: "text-sm",
    itemSold: "text-[gray] text-xs"
  }
  const items = [
    {name: "Keychain Dog", price: 9.81, desc: "A cute fancy keychain dog", sold: 132},
    {name: "Keychain Dog", price: 9.81, desc: "A cute fancy keychain dog", sold: 132},
    {name: "Keychain Dog", price: 9.81, desc: "A cute fancy keychain dog", sold: 132},
    {name: "Keychain Dog", price: 9.81, desc: "A cute fancy keychain dog", sold: 132},
    {name: "Keychain Dog", price: 9.81, desc: "A cute fancy keychain dog", sold: 132},
    {name: "Keychain Dog", price: 9.81, desc: "A cute fancy keychain dog", sold: 132},
  ];
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
      <div className="w-full m-3">
        <h2 className={styles.headerTitle}>Top Item Sales / Popular</h2>
        <div className={styles.itemList}>
          {items.map((item, index) => {
            return (
              <>
                <div key={index} className={styles.itemCard}>
                  <span>{item.name}</span>
                  <code className={styles.itemPrice}>₱{item.price}</code>
                  <p className={styles.itemDesc}>{item.desc}</p>
                  <span className={styles.itemSold}>{item.sold} Sold</span>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}