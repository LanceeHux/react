import { styles } from "../App"

 const MyCart = ({ user_id, username, loggedIn }) => {
    if (!loggedIn) {
        return (
            <div className={styles.myCart.main}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className={styles.main}>Login to your account to proceed.</h1>
                    <button>Login</button>
                </div>
            </div>
        )
    }

    
}

export default MyCart