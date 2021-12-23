import React from 'react'
import style from './Navbar.module.css'

function Navbar() {
    return (
        <navbar className={style.navbar}>
            <h2 className={style.container}>
                Curso Web Developer
            </h2>

            <div className={style.container_two}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Cursos
                    </li>
                    <li>
                        Novidades
                    </li>
                    <li>
                       Login | Cadastro
                    </li>
                </ul>
            </div>
            
        </navbar>
    )
}

export default Navbar
