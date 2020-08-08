import React from 'react'

import './style.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (<article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/45675035?s=460&u=e8277ab9d3eb18151613a2699e1fbb6572a3dcc4&v=4"
                alt="Atila Rodrigues" />
            <div>
                <strong>Átila Rodrigues</strong>
                <span>Biólogo</span>
            </div>
        </header>
        <p>
            Biólogo, pesquisador e programador
                    </p>
        <footer>
            <p>
                Preço/hora
                            <strong>R$80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;