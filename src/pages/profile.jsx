import { styles } from "./App"

export const loggedIn = (
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