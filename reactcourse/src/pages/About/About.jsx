import { useContext, useState } from "react"
import authContext from "../../contexts/authContexts"

import styles from "./About.module.css"

function AboutPage() {
    const context = useContext(authContext)

    return (
        <>
            <h1 className={styles.h1}>
                {context.isAuthenticated ? 'Olá, você está autenticado na sobre!' : 'Sobre'}
                </h1>
        </>
    )
}

export default AboutPage