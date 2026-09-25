import { useState, useEffect } from "react"
import { styles } from "./App"

import { dashboard } from "./pages/dashboard"
import { myCart } from "./pages/mycart"
import { activeProfile, inactiveProfile } from "./pages/profile"

export default function App() {
  let [activeSection, setSection] = useState("PROFILE");
  let [isLoggedIn, setLogin] = useState(true);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Lezada</h1>

        <nav className={styles.nav}>
          <a onClick={() => setSection("DASHBOARD")} className={styles.navBtn}>Dashboard</a>
          <a onClick={() => setSection("MY_CART")} className={styles.navBtn}>My Cart</a>
          <a onClick={() => setSection("PROFILE")} className={styles.navBtn}>Profile</a>
        </nav>
      </header>
      {/* DASHBOARD */}
      {activeSection === "DASHBOARD" && dashboard}

      {/* MY_CART LOGIN */}
      {activeSection === "MY_CART" && isLoggedIn && myCart}
      {/* MY_CART LOGOUT */}
      {activeSection === "MY_CART" && !isLoggedIn && alert("Login to access your cart.")}

      {/* PROFILE LOGIN */}
      {activeSection === "PROFILE" && isLoggedIn && activeProfile}
    </>
  )
}
