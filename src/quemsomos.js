import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import mulheres from './mulheres.png';

function SOMOS() {
    return (
        <nav className='texto'>
            <section class='historia'>
                <div class='caixa'>
                    <div class='coluna'>
                        <h3>QUEM SOMOS?</h3>
<br></br>
                            <p>Na nossa empresa, acreditamos que a independência financeira é um passo crucial para o empoderamento das mulheres. Nosso foco é apoiar mães chefes de família, proporcionando-lhes as ferramentas necessárias para conquistar sua autonomia econômica.

                            Buscamos criar um ambiente onde todas as mulheres tenham as mesmas oportunidades de sucesso. Isso inclui acesso a recursos, educação financeira e suporte para empreender.

                            Encorajamos a inovação e o empreendedorismo como caminhos para a independência financeira. Acreditamos que mulheres têm o potencial de liderar negócios bem-sucedidos em diversas áreas.
                            Junte-se a nós nessa jornada! Seja parte da nossa comunidade comprometida com a transformação da vida das mulheres através da independência financeira.</p>

            <div className='coluna'>
                <img src={mulheres} class='./mulheres.png' alt="mulheres" height={400} width={400}></img>
            </div>

                    </div>
                </div>
            </section>

  </nav>
      
    )
}

export default SOMOS;