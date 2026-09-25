import { useState, useEffect } from "react"
import { styles } from "./App"

import Dashboard from "./pages/dashboard"
import MyCart from "./pages/mycart"
import { ActiveProfile, InactiveProfile } from "./pages/profile"

export default function App() {
  let [activeSection, setSection] = useState("PROFILE");
  let [isLoggedIn, setLogin] = useState(false);
  return (
    <>
    <header className={styles.header}>
        <h1 className={styles.logo}>Lezada</h1>

        <nav className={styles.nav}>
          <a onClick={() => setSection("DASHBOARD")} className={styles.navBtn}>Dashboard</a>
          <a onClick={() => setSection("MY_CART")} className={styles.navBtn}>My Cart</a>
          <a onClick={() => setSection("PROFILE")} className={styles.navBtn}>Profile</a>
        </nav>

        <button className={styles.navMobile}>🍔</button>
        {/* to be finished */}

    </header>

      {/* DASHBOARD */}
      {activeSection === "DASHBOARD" && <Dashboard/>}

      {/* MY_CART LOGIN */}
      {activeSection === "MY_CART" && isLoggedIn === true && <MyCart/>}
      {/* MY_CART LOGOUT */}
      {activeSection === "MY_CART" && !isLoggedIn && <Dashboard/>}

      {/* PROFILE LOGIN */}
      {activeSection === "PROFILE" && isLoggedIn && <ActiveProfile/>}
      {activeSection === "PROFILE" && !isLoggedIn && <InactiveProfile/>}
    </>
  )
}
