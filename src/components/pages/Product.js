import React from 'react'
import style from './Product.module.css'

function Product() {
    return (
        <div className={style.container}>
            <div className={style.apresentacao}>
                <h1>Nossos planos</h1>
                <p>
                    Adiquira nossos conteúdos para dar Start na sua carreira como Desenvolvedor Web.
                </p>
            </div>
        <section className={style.cards}>
            <div className={style.card_one}>
                <div className={style.title}>Free</div>
                <div className={style.conteudo}>
                   <div className={style.preco}>R$ 00,00 p/ Mês</div>  <p>Tenha acesso à todas nossas aulas para iniciantes</p>
                </div>
                <button className={style.button}>
                    Comece agora
                </button>
            </div>

            <div className={style.card_two}>
                <div className={style.title}>Pro</div>
                <div className={style.conteudo}>
                <div className={style.preco}>R$ 60,00 p/ Mês</div>  <p>Conteúdo avançado liberado além de vários desafios.</p>
                </div>
                <button className={style.button}>
                    Cadastre-se
                </button>
            </div>

            <div className={style.card_three}>
                <div className={style.title}>Master</div>
                <div className={style.conteudo}>
                <div className={style.preco}>R$ 90,00 p/ Mês</div>  <p>Todo o conteúdo do PRO além de ter acesso a consultorias.</p>
                </div>
                <button className={style.button}>
                    Cadastre-se
                </button>
            </div>
        </section>
        </div>
    )
}

export default Product
