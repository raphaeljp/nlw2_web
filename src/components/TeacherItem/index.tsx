import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/19826823?s=460&u=9dc94e908e6ebd5737a90c252d4e56b6a9a6202b&v=4" alt="Raphael Pereira"/>
                <div>
                    <strong>Raphael Pereira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explidor coisas em laboratório e por mudar a vida das pessoas através
                de experiências. Mas de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 110,00</strong>
                </p>
                <button type="button">
                    <img src={ whatsappIcon } alt="Whatsapp" /> Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;