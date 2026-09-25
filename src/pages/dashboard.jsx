export const dashboard = (
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
)