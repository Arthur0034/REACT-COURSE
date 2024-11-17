import { useContext, useState } from "react"
import Header from '../../components/Header/Header'
import Timer from '../../components/Timer/Timer'
import authContext from "../../contexts/authContexts"

import styles from './Home.module.css'

function HomePage() {
    const [showTimer, SetShowTimer] = useState(true)
    const context = useContext(authContext)

    return (
        <>
            <h1 className={styles.h1}>
                {context.isAuthenticated ? 'Olá, você está autenticado!' : 'Olá seja bem vindo'}
                </h1>
            {showTimer ? <Timer /> : null}
            <button onClick={function () { SetShowTimer(!showTimer) }}>
                mostrar/esconder
            </button>
        </>
    )
}

export default HomePage