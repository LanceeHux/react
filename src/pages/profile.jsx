import { supabase } from "../utils/supabase"
import { useEffect, useState } from "react"
import { styles } from "../App"

const user = {
  name: "",
  email: "",
  password: ""
}

export const ShowProfile = ({ loggedIn, setLoggedIn, username, setUsername, user_id, setUser_id }) => {

  if (!loggedIn) {
    return <InactiveProfile setLoggedIn={setLoggedIn} setUsername={setUsername} setUser_id={setUser_id} />
  } else {
    return <ActiveProfile username={username} user_id={user_id}/>
  }
  
}

export const ActiveProfile = ({ username, user_id, }) => {
  const [purchasesCount, setPurchasesCount] = useState(0);
  const [spentAmount, setSpentAmount] = useState(0.00)
  const [purchases, setPurchases] = useState([])
  const badges = [];

  useEffect(() => {
    const TrackPurchases = async () => {
      const { data, error } = await supabase.from("purchases")
      .select("*").eq("user_id", user_id);
      if (error) {
        alert(error.message);
        return;
      }
      setSpentAmount(data.reduce((total,sum) => total+sum.item_price,0))
      setPurchasesCount(data.length)
      setPurchases(data)
    }

    TrackPurchases();
  }, [user_id])

  const showBadges = () => {
    
    if (purchasesCount >= 5 && purchasesCount < 10) {
      return (
        <div className={styles.profile.activeProfile.memberBadge}>
          <span>✦</span>
          Suki {purchasesCount}
        </div>
      )
    }
  }

  return (
    <main className={styles.profile.activeProfile.main}>

      {/* Profile Sidebar */}
      <aside className={styles.profile.activeProfile.sidebar}>

        <div className={styles.profile.activeProfile.avatarWrapper}>
          <img
            className={styles.profile.activeProfile.profileImg}
            src={user.profileImg}
            alt={user.name}
          />

          <span className={styles.profile.activeProfile.onlineDot} />
        </div>

        <div className={styles.profile.activeProfile.identity}>
          <h1 className={styles.profile.activeProfile.name}>
            {username}
          </h1>

          <p className={styles.profile.activeProfile.role}>
            Lezada Buyer
          </p>
        </div>
        
        <div>
          {showBadges()}
        </div>

        <nav className={styles.profile.activeProfile.sideNav}>

          <button className={styles.profile.activeProfile.sideNavActive}>
            <span>▦</span>
            Overview
          </button>

          <button className={styles.profile.activeProfile.sideNavBtn}>
            <span>◷</span>
            Purchases
          </button>

          <button className={styles.profile.activeProfile.sideNavBtn}>
            <span>⚙</span>
            Settings
          </button>

        </nav>

        <button className={styles.profile.activeProfile.editBtn}>
          Edit Profile
        </button>

      </aside>


      {/* Main Content */}
      <section className={styles.profile.activeProfile.content}>

        <header className={styles.profile.activeProfile.header}>

          <div>
            <p className={styles.profile.activeProfile.eyebrow}>
              MY ACCOUNT
            </p>

            <h2 className={styles.profile.activeProfile.title}>
              Welcome back, {username}
            </h2>

            <p className={styles.profile.activeProfile.subtitle}>
              Here's what's happening with your Lezada account.
            </p>
          </div>

          <span className={styles.profile.activeProfile.statusBadge}>
            ● Active
          </span>

        </header>


        {/* Stats */}
        <div className={styles.profile.activeProfile.stats}>

          <div className={styles.profile.activeProfile.statCard}>
            <div className={styles.profile.activeProfile.statTop}>
              <span>Purchases</span>
              <b>↗</b>
            </div>

            <strong>{purchasesCount}</strong>

            <small>
              Total items purchased
            </small>
          </div>


          <div className={styles.profile.activeProfile.statCard}>
            <div className={styles.profile.activeProfile.statTop}>
              <span>Total Spent</span>
              <b>₱</b>
            </div>

            <strong>₱{spentAmount}</strong>

            <small>
              Lifetime spending
            </small>
          </div>

        </div>


        {/* Account */}
        <section className={styles.profile.activeProfile.accountCard}>

          <div className={styles.profile.activeProfile.cardHeader}>
            <div>
              <p>ACCOUNT INFORMATION</p>
              <h3>Personal details</h3>
            </div>

            <button>
              Edit
            </button>
          </div>


          <div className={styles.profile.activeProfile.detailsGrid}>

            <div className={styles.profile.activeProfile.detail}>
              <span>Username</span>
              <strong>{username}</strong>
            </div>

            <div className={styles.profile.activeProfile.detail}>
              <span>Account type</span>
              <strong>Buyer</strong>
            </div>

            <div className={styles.profile.activeProfile.detail}>
              <span>Email</span>
              <strong>Hidden</strong>
            </div>

            <div className={styles.profile.activeProfile.detail}>
              <span>Status</span>
              <strong className={styles.profile.activeProfile.activeText}>
                Active
              </strong>
            </div>

          </div>

        </section>


        {/* Bottom */}
        <section className={styles.profile.activeProfile.purchaseCard}>
          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-gray-400">
              YOUR PURCHASES
            </p>

            <h3 className="mt-1 text-xl font-bold text-gray-900">
              Recent purchases
            </h3>

            <div className="mt-5 flex flex-col gap-3">
            <div className="mt-6 space-y-3">
                {purchases.map(item => {
                  return (
                    <div
                      key={item.id}
                      className="
                        group
                        flex items-center gap-4
                        rounded-2xl
                        border border-gray-100
                        bg-white
                        p-3
                        shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:border-gray-200
                        hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                      "
                    >

                      {/* Product Image */}
                      <div
                        className="
                          relative
                          h-20 w-20
                          shrink-0
                          overflow-hidden
                          rounded-xl
                          bg-gray-100
                        "
                      >
                        <img
                          src={item.item_img}
                          alt={item.item_name}
                          className="
                            h-full w-full
                            object-cover
                            transition-transform duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      {/* Product Information */}
                      <div className="min-w-0 flex-1 py-1">

                        <div className="flex items-center justify-between gap-3">

                          <h1
                            className="
                              truncate
                              text-sm
                              font-semibold
                              text-gray-900
                            "
                          >
                            {item.item_name}
                          </h1>

                          <span
                            className="
                              hidden
                              shrink-0
                              rounded-full
                              bg-green-50
                              px-3 py-1
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-wide
                              text-green-600
                              sm:block
                            "
                          >
                            Purchased
                          </span>

                        </div>

                        <p
                          className="
                            mt-1
                            line-clamp-2
                            text-xs
                            leading-5
                            text-gray-400
                          "
                        >
                          {item.item_description}
                        </p>

                        <div className="mt-2 flex items-center gap-3">

                          <span className="text-sm font-bold text-gray-900">
                            ₱{Number(item.item_price).toFixed(2)}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-gray-300" />

                          <span className="text-[11px] text-gray-400">
                            Purchase #{item.id}
                          </span>

                        </div>

                      </div>

                      {/* Arrow */}
                      <button
                        className="
                          hidden
                          h-9 w-9
                          shrink-0
                          items-center justify-center
                          rounded-full
                          bg-gray-50
                          text-gray-400
                          transition-all
                          group-hover:bg-gray-900
                          group-hover:text-white
                          sm:flex
                        "
                      >
                        →
                      </button>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <button>
            Browse Marketplace →
          </button>
        </section>
      </section>
    </main>
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
      <div className={styles.profile.inactiveProfile.unregisteredDiv.div}>
        <h1>Login to your account to proceed.</h1>
        <button onClick={() => setShowHandler(true)} className={styles.profile.inactiveProfile.unregisteredDiv.btn}>Register / Login</button>
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