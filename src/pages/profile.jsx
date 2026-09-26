import { supabase } from "../utils/supabase"
import { useEffect, useState } from "react"
import { styles } from "../App"



export const ActiveProfile = () => {

  return (
    <>
    <main>
        <div className={styles.profile.main}>
          {/* Banner */}
          <div className={styles.profile.banner} />
          {/* Profile information */}
          <div className={styles.profile.profileHolder}>
            <img
              className={styles.profile.profileImg}
              src={user.profileImg}
              alt={user.name}
            />
            <div className={styles.profile.userInfo}>
              <div>
                <h1 className={styles.profile.name}>
                  {user.name}
                </h1>
                <p className={styles.profile.role}>
                  Lezada {user.status}
                </p>
              </div>
              <span className={styles.profile.statusBadge}>
                {user.status}
              </span>
            </div>
            {/* Statistics */}
            <div className={styles.profile.stats}>
              <div className={styles.profile.statCard}>
                <p className={styles.profile.statValue}>
                  {user.purchasesCount}
                </p>
                <p className={styles.profile.statLabel}>
                  Items Purchased
                </p>
              </div>
              <div className={styles.profile.statCard}>
                <p className={styles.profile.statValue}>
                  ₱0.00
                </p>
                <p className={styles.profile.statLabel}>
                  Total Spent
                </p>
              </div>
            </div>
            {/* Actions */}
            <div className={styles.profile.actions}>
              <button className={styles.profile.actionBtn}>
                Edit Profile
              </button>
              <button className={styles.profile.primaryBtn}>
                My Purchases
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const InactiveProfile = () => {
  const [ username, setUsername] = useState("Leeyam");
  const [ password, setPassword ] = useState("1234");

  async function handleLogin() {
    const {data, error} = await supabase.from("accounts")
    .select("*").eq("username", username)
    .eq("password", password)

    if (error) {
      alert("error logging in!");
      return;
    } else if (data && data.length > 0) {
      alert(`welcome! ${username}`);
    } else {
      alert("no matching accounts.")
    }
  }
  return (
  <main className={styles.main}>
    <div className={styles.profile.unregisteredDiv.div}>
      <h1>Login to your account to proceed.</h1>
      <button onClick={() => handleLogin()} className={styles.profile.unregisteredDiv.btn}>test</button>
    </div>
  </main>
  )
}

export const AccountHandler = () => {
  const [ channel, setChannel ] = useState("REGISTER");
  return (
    <main className={styles.main}>
      <div className=" shadow-xl p-5 rounded-2xl border border-2 border-[pink]">
        <div className="flex justify-center flex-col items-center border-b border-gray-200 pb-4">
          <h1 className={styles.title}>Lezada Account</h1>
          <nav className={styles.profile.accountHandler.nav}>
            <a onClick={() => setChannel("REGISTER")} className={styles.profile.accountHandler.navBtn}>Register</a>
            <a onClick={() => setChannel("LOGIN")} className={styles.profile.accountHandler.navBtn}>Login</a>
          </nav>
        </div>
        
      </div>
    </main>
  )
}