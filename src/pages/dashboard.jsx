import { styles } from "../App"
import { useState } from "react"
import { supabase } from "../utils/supabase"

const items = [
    {
        name: "Leest",
        price: 55,
        desc: "An academic to-do list designed for specific subjects.",
        img: "/images/leest.jpeg",
        sold: 132
    },
    {
        name: "Flashcard PDF",
        price: 46.8,
        desc: "Upload a school reviewer PDF and generate AI-powered flashcards.",
        img: "/images/flashcard.jpg",
        sold: 132
    },
    {
        name: "Flashcard Quiz",
        price: 60,
        desc: "Turn your flashcards into questions that challenge your knowledge.",
        img: "/images/flashcards-v2.jpeg",
        sold: 132
    },
    {
        name: "Lee+",
        price: 98.40,
        desc: "An AI-powered experience using the Grok API.",
        img: "/images/leeplus.jpeg",
        sold: 132
    },
    {
        name: "Denver Sticker",
        price: 100,
        desc: "A Denver sticker collection with different funny designs.",
        img: "/images/L.png",
        sold: 132
    },
    {
        name: "Keychain Dog",
        price: 9.81,
        desc: "A small and cute fancy dog keychain.",
        img: "/images/L.png",
        sold: 132
    }
]

async function buyItem(item, { user_id }) {

     if (!user_id) {
        alert("Login first!");
        return;
    }
    const { data, error } = await supabase.from("purchases").insert([{
        "item_name": item.name,
        "item_price": item.price,
        "item_img": item.img,
        "user_id": user_id
    }]);

    if (error) {
        alert(error.message);
        return;
    }

    alert(`${item.name} bought for ₱${item.price}`);

}

export default function Dashboard({ user_id }) {
    const [selectedItem, selectItem] = useState();

    return (
        <>
        {selectedItem && (
    <section className={styles.dashboard.openItem.overlay}>

        <div className={styles.dashboard.openItem.modal}>

            {/* Close */}
            <button
                onClick={() => selectItem(null)}
                className={styles.dashboard.openItem.close}
            >
                ×
            </button>


            <div className={styles.dashboard.openItem.grid}>

                {/* Product Image */}
                <div className={styles.dashboard.openItem.imageSection}>

                    <img
                        src={selectedItem.img}
                        alt={selectedItem.name}
                        className={styles.dashboard.openItem.image}
                    />

                </div>


                {/* Product Information */}
                <div className={styles.dashboard.openItem.info}>

                    <div>

                        <p className={styles.dashboard.openItem.category}>
                            DIGITAL PRODUCT
                        </p>

                        <h2 className={styles.dashboard.openItem.name}>
                            {selectedItem.name}
                        </h2>

                        <div className={styles.dashboard.openItem.price}>
                            ₱{selectedItem.price.toFixed(2)}
                        </div>

                        <p className={styles.dashboard.openItem.description}>
                            {selectedItem.desc}
                        </p>


                        {/* Stats */}
                        <div className={styles.dashboard.openItem.stats}>

                            <div className={styles.dashboard.openItem.stat}>
                                <p>SOLD</p>
                                <strong>{selectedItem.sold}</strong>
                            </div>

                            <div className={styles.dashboard.openItem.stat}>
                                <p>TYPE</p>
                                <strong>Digital</strong>
                            </div>

                        </div>

                    </div>


                    {/* Purchase */}
                    <div className={styles.dashboard.openItem.purchase}>

                        <button onClick={() => buyItem(selectedItem, { user_id })} className={styles.dashboard.openItem.purchaseButton}>
                            Get this product
                        </button>

                        <p className={styles.dashboard.openItem.note}>
                            Instant digital access after purchase
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>
)}
        <main className={styles.dashboard.main}>

            {/* Header */}
            <header className={styles.dashboard.sectionHeader}>

                <div>
                    <p className={styles.dashboard.eyebrow}>
                        LEZADA MARKETPLACE
                    </p>

                    <h1 className={styles.dashboard.title}>
                        Discover something useful.
                    </h1>

                    <p className={styles.dashboard.subtitle}>
                        Digital products, tools and little things made by Lee
                    </p>
                </div>

                <div className={styles.dashboard.headerBadge}>
                    <span />
                    6 Products
                </div>

            </header>


            {/* Featured Products */}
            <section className={styles.dashboard.itemGrid}>

                {items.map((item, index) => (

                    <article
                        key={index}
                        className={styles.dashboard.itemCard}
                        onClick={() => selectItem(item)}
                    >

                        {/* Image */}
                        <div className={styles.dashboard.imageContainer}>

                            <img
                                src={item.img}
                                alt={item.name}
                                className={styles.dashboard.itemImg}
                            />

                            <span className={styles.dashboard.productTag}>
                                PRODUCT
                            </span>

                        </div>


                        {/* Content */}
                        <div className={styles.dashboard.itemContent}>

                            <div className={styles.dashboard.itemTop}>

                                <div>
                                    <p className={styles.dashboard.productType}>
                                        DIGITAL PRODUCT
                                    </p>

                                    <h2 className={styles.dashboard.itemName}>
                                        {item.name}
                                    </h2>
                                </div>

                                <span className={styles.dashboard.itemPrice}>
                                    ₱{item.price.toFixed(2)}
                                </span>

                            </div>


                            <p className={styles.dashboard.itemDesc}>
                                {item.desc}
                            </p>


                            {/* Bottom */}
                            <div className={styles.dashboard.itemBottom}>

                                <div className={styles.dashboard.soldInfo}>
                                    <span className={styles.dashboard.soldDot} />
                                    {item.sold} sold
                                </div>

                                <button
                                    className={styles.dashboard.viewBtn}
                                    onClick={(event) => {
                                        event.stopPropagation()
                                        selectItem(item)
                                    }}
                                >
                                    View
                                    <span>→</span>
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