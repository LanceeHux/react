import { useState, useEffect } from "react"
import { supabase } from "./utils/supabase"
import { styles } from "./App"

import Dashboard from "./pages/dashboard"
import MyCart from "./pages/mycart"
import { ShowProfile } from "./pages/profile"

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [ user_id, setUser_id ] = useState()

  let [activeSection, setSection] = useState("PROFILE");
  let [nav, openNav] = useState(false)

  return (
    <>
    <header className={styles.header}>
        <h1 className={styles.logo}>Lezada</h1>

        <nav className={styles.nav}>
          <a onClick={() => setSection("DASHBOARD")} className={styles.navBtn}>Dashboard</a>
          <a onClick={() => setSection("MY_CART")} className={styles.navBtn}>My Cart</a>
          <a onClick={() => setSection("PROFILE")} className={styles.navBtn}>Profile</a>
        </nav>

        <button className={styles.navMobile} onClick={() => openNav(!nav)}>🍔</button>
    </header>
    {nav === true && (
      <div className="flex justify-end relative [z-index:999]">
      <nav className="flex flex-col p-3 items-end absolute bg-[gray] rounded-xl m-2 fixed md:hidden lg:hidden">
        <a onClick={() => setSection("DASHBOARD")} className={styles.mobileNavBtn}>Dashboard</a>
        <a onClick={() => setSection("MY_CART")} className={styles.mobileNavBtn}>My Cart</a>
        <a onClick={() => setSection("PROFILE")} className={styles.mobileNavBtn}>Profile</a>
      </nav>
    </div>
    )}
    
    
      
      {/* DASHBOARD */}
      {activeSection === "DASHBOARD" && <Dashboard user_id={user_id}/>}

      {/* MYCART */}
      {activeSection === "MY_CART" && loggedIn && <MyCart user_id={user_id} username={username}/>}
      {/* PROFILE LOGIN */}
      {activeSection === "PROFILE" && <ShowProfile username={username} setUsername={setUsername} user_id={user_id} setUser_id={setUser_id} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
      
    </>
  )
}
