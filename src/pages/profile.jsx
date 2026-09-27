import { supabase } from "../utils/supabase"
import { useEffect, useState } from "react"
import { styles } from "../App"

const user = {
  name: "",
  email: "",
  password: ""
}

export const ShowProfile = ({ loggedIn,
  setLoggedIn,
  username,
  setUsername,
  user_id,
  setUser_id }) => {

  if (!loggedIn) {
    return <InactiveProfile setLoggedIn={setLoggedIn} setUsername={setUsername} setUser_id={setUser_id} />
  } else {
    return <ActiveProfile username={username}/>
  }
  
}

export const ActiveProfile = ({ username }) => {

  return (
    <>
    <main>
        <div className={styles.profile.activeProfile.main}>
          {/* Banner */}
          <div className={styles.profile.activeProfile.banner} />
          {/* Profile information */}
          <div className={styles.profile.activeProfile.profileHolder}>
            <img
              className={styles.profile.activeProfile.profileImg}
              src={user.profileImg}
              alt={user.name}
            />
            <div className={styles.profile.activeProfile.userInfo}>
              <div>
                <h1 className={styles.profile.activeProfile.name}>
                  {username}
                </h1>
                <p className={styles.profile.activeProfile.role}>
                  Lezada Buyer
                </p>
              </div>
              <span className={styles.profile.activeProfile.statusBadge}>
                Buyer
              </span>
            </div>
            {/* Statistics */}
            <div className={styles.profile.activeProfile.stats}>
              <div className={styles.profile.activeProfile.statCard}>
                <p className={styles.profile.activeProfile.statValue}>
                  0
                </p>
                <p className={styles.profile.activeProfile.statLabel}>
                  Items Purchased
                </p>
              </div>
              <div className={styles.profile.activeProfile.statCard}>
                <p className={styles.profile.activeProfile.statValue}>
                  ₱0.00
                </p>
                <p className={styles.profile.activeProfile.statLabel}>
                  Total Spent
                </p>
              </div>
            </div>
            {/* Actions */}
            <div className={styles.profile.activeProfile.actions}>
              <button className={styles.profile.activeProfile.actionBtn}>
                Edit Profile
              </button>
              <button className={styles.profile.activeProfile.primaryBtn}>
                My Purchases
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const InactiveProfile = ({ setLoggedIn, setUsername, setUser_id }) => {

  const [ showHandler, setShowHandler ] = useState(false);

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
    if (!showHandler) {
      return (
        <main className={styles.main}>
      <div className={styles.profile.unregisteredDiv.div}>
        <h1>Login to your account to proceed.</h1>
        <button onClick={() => setShowHandler(true)} className={styles.profile.unregisteredDiv.btn}>Register / Login</button>
      </div>
    </main>
      )
    } 
    return <AccountHandler setLoggedIn={setLoggedIn} setUsername={setUsername} setUser_id={setUser_id} />
}

export const AccountHandler = ({ setLoggedIn, setUsername, setUser_id }) => {
  const [ channel, setChannel ] = useState("REGISTER");
  const [ loading, setLoading ] = useState(false);
  const registerHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    async function validateAccount() {
      const { data, error } = await supabase.from("accounts")
      .select("*").eq("email", email)

      if (error) {
        alert(error.message);
        return false;
      } else if (data.length > 0) {
        alert("Email already exists!");
        return false;
      }
      return true;
    }

    const isValid = await validateAccount();
    
    if(!isValid) {
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.from("accounts")
    .insert([{
      "username": username,
      "password": password,
      "email": email
    }])

    if (error) {
      alert(error.message);
    } else {
      alert("Success");
      setChannel("LOGIN");
    }
    setLoading(false)
    

  }
  const loginHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    async function validateAccount() {
      const { data, error } = await supabase.from("accounts")
      .select("*").eq("email", email).eq("password", password)

      if (error) {
        alert(error.message);
        return false;
      } else if (data.length === 1) {
        setUsername(data[0].username);
        setUser_id(data[0].id)
        return true;
        
      }
    }
    const isValid = await validateAccount();

    if (!isValid) {
      alert("there are no matching accounts!");
      return;
    } else if (isValid) {
      alert("account detected");
      setLoggedIn(true);
      setLoading(false);
    }
  }

  return (
    <main className={styles.main}>
      <div className="flex justify-center items-center w-full">
        <div className=" shadow-xl p-5 rounded-2xl border border-2 border-[pink] md:w-[75%] lg:w-[75%] w-full items-center justify-center">
          <div className="flex justify-center flex-col items-center border-b border-gray-200 pb-4">
            <h1 className={styles.title}>Lezada Account</h1>
            <nav className={styles.profile.accountHandler.nav}>
              <a onClick={() => setChannel("REGISTER")} className={styles.profile.accountHandler.navBtn}>Register</a>
              <a onClick={() => setChannel("LOGIN")} className={styles.profile.accountHandler.navBtn}>Login</a>
            </nav>
          </div>

          {channel === "REGISTER" && (
            <main className={styles.profile.accountHandler.main}>
              <h1 className={styles.profile.accountHandler.title}>Register Account!</h1>
              <form onSubmit={registerHandler} action="POST" className={styles.profile.accountHandler.form}>

                <label htmlFor="Username" className={styles.profile.accountHandler.subtitle}>Username:</label>
                <input name="username" type="text" className={styles.profile.accountHandler.inputs} placeholder="Leeyam" required/>

                <label htmlFor="Email" className={styles.profile.accountHandler.subtitle}>Email:</label>
                <input name="email" type="email" className={styles.profile.accountHandler.inputs} placeholder="leeyam@example.com" required/>

                <label htmlFor="Password" className={styles.profile.accountHandler.subtitle}>Password:</label>
                <input name="password" type="password" className={styles.profile.accountHandler.inputs} placeholder="#Scammer123!" required/>

                <button type="submit" className={styles.profile.accountHandler.submitBtn}>
                  {loading ? "Registering" : "Register"}
                </button>
              </form>
            </main>
          )}

          {channel === "LOGIN" && (
            <main className={styles.profile.accountHandler.main}>
              <h1 className={styles.profile.accountHandler.title}>Login Account!</h1>
              <form onSubmit={loginHandler} action="POST" className={styles.profile.accountHandler.form}>

                <label htmlFor="Email" className={styles.profile.accountHandler.subtitle}>Email:</label>
                <input name="email" type="email" className={styles.profile.accountHandler.inputs} placeholder="leeyam@example.com" required/>

                <label htmlFor="Password" className={styles.profile.accountHandler.subtitle}>Password:</label>
                <input name="password" type="password" className={styles.profile.accountHandler.inputs} placeholder="#Scammer123!" required/>

                <button type="submit" className={styles.profile.accountHandler.submitBtn}>
                  {loading ? "Registering" : "Register"}
                </button>
              </form>
            </main>
          )}          
        </div>
      </div>
    </main>
  )
}