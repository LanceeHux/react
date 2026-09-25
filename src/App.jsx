import { useState, useEffect } from "react"

export default function App() {
  const styles = {
    header: `
      h-[70px] px-[5%]
      flex items-center justify-between
      bg-white border-b border-gray-200
      sticky top-0 z-10
    `,

    logo: `
      m-0
      text-[22px] font-extrabold
      tracking-[-0.5px]
    `,

    nav: `
      flex gap-2
    `,

    navBtn: `
      px-3.5 py-2
      rounded-lg
      text-sm font-medium text-gray-500
      transition-all duration-200
      hover:bg-black hover:text-white
    `,

    main: `
      w-[90%] max-w-[1400px]
      mx-auto
      py-[60px]
    `,

    sectionHeader: `
      mb-7
    `,

    eyebrow: `
      mb-1.5
      text-[11px] font-bold
      tracking-[2px]
      text-gray-400
    `,

    title: `
      m-0
      text-[clamp(26px,4vw,38px)]
      font-extrabold
      tracking-[-1.5px]
    `,

    subtitle: `
      mt-2
      text-sm text-gray-500
    `,

    itemGrid: `
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-[18px]
    `,

    itemCard: `
      overflow-hidden
      bg-white
      border border-gray-200
      rounded-[14px]
      transition-all duration-300
      hover:-translate-y-1.5
      hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
    `,

    imageContainer: `
      w-full h-[210px]
      overflow-hidden
      bg-gray-100
    `,

    itemImg: `
      w-full h-full
      block
      object-cover
      transition-transform duration-500
      hover:scale-105
    `,

    itemContent: `
      p-[17px]
    `,

    itemTop: `
      flex items-start justify-between
      gap-2.5
    `,

    itemName: `
      m-0
      text-base font-bold
    `,

    itemPrice: `
      text-[15px]
      font-extrabold
      text-pink-500
      whitespace-nowrap
    `,

    itemDesc: `
      mt-2 mb-[18px]
      min-h-[40px]
      text-[13px]
      leading-[1.55]
      text-gray-500
    `,

    itemBottom: `
      flex items-center justify-between
    `,

    itemSold: `
      text-[11px]
      text-gray-400
    `,

    viewBtn: `
      px-3.5 py-1.5
      rounded-md
      border-0
      bg-black text-white
      text-xs font-semibold
      cursor-pointer
      transition-all duration-200
      hover:bg-gray-700
      hover:-translate-y-px
    `,
  }

  const items = [
    {
      name: "Denver Sticker",
      price: 100,
      desc: "A Denver sticker with various designs.",
      img: "/images/denver.jpeg",
      sold: 132
    },
    {
      name: "Leest",
      price: 55,
      desc: "An academic to-do list for specific subjects.",
      img: "/images/leest.jpeg",
      sold: 132
    },
    {
      name: "Flashcard PDF",
      price: 46.8,
      desc: "Upload a PDF reviewer and generate 10 AI-powered flashcards.",
      img: "/images/flashcard.jpg",
      sold: 132
    },
    {
      name: "Flashcard Quiz",
      price: 60,
      desc: "Turn your reviewer into questions that challenge your knowledge.",
      img: "/images/flashcards-v2.jpeg",
      sold: 132
    },
    {
      name: "Lee+",
      price: 98.4,
      desc: "AI powered by the Grok API.",
      img: "/images/leeplus.jpeg",
      sold: 132
    },
    {
      name: "Keychain Dog",
      price: 9.81,
      desc: "A cute fancy keychain dog.",
      img: "/images/L.png",
      sold: 132
    }
  ]

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Lezada</h1>

        <nav className={styles.nav}>
          <a href="#" className={styles.navBtn}>Dashboard</a>
          <a href="#" className={styles.navBtn}>My Cart</a>
          <a href="#" className={styles.navBtn}>Profile</a>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>MARKETPLACE</p>

          <h2 className={styles.title}>
            Top Item Sales
          </h2>

          <p className={styles.subtitle}>
            Popular products from the Lezada marketplace
          </p>
        </div>

        <section className={styles.itemGrid}>
          {items.map((item, index) => (
            <article
              key={index}
              className={styles.itemCard}
            >
              <div className={styles.imageContainer}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.itemImg}
                />
              </div>

              <div className={styles.itemContent}>
                <div className={styles.itemTop}>
                  <h3 className={styles.itemName}>
                    {item.name}
                  </h3>

                  <span className={styles.itemPrice}>
                    ₱{item.price.toFixed(2)}
                  </span>
                </div>

                <p className={styles.itemDesc}>
                  {item.desc}
                </p>

                <div className={styles.itemBottom}>
                  <span className={styles.itemSold}>
                    {item.sold} sold
                  </span>

                  <button className={styles.viewBtn}>
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}