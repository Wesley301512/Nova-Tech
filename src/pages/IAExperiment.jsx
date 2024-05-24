import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Sass/IAExperiment.scss';

export default function IAExperiment() {
  return (
    <>
      <Header />
      <div className="iaexperiment-container">
        <h2 className="text-2xl font-bold mb-4">Blood IA</h2>
        <p className="ia-text">
          Blood IA é um avançado sistema alimentado por inteligência artificial (IA), meticulosamente desenvolvido para a rápida e precisa identificação de doenças sanguíneas. Sua sofisticada operação inicia-se com a coleta minuciosa de dados, nos quais informações detalhadas sobre o paciente e sua condição são meticulosamente inseridas.

          A partir dessa rica fonte de dados, Blood IA realiza uma análise profunda e abrangente, utilizando algoritmos avançados de aprendizado de máquina e processamento de dados. Essa análise profunda permite que o sistema ofereça diagnósticos rápidos e precisos, superando as limitações dos métodos tradicionais.

          A verdadeira vantagem do Blood IA reside na sua capacidade de fornecer insights valiosos em tempo hábil, capacitando os profissionais de saúde a tomarem decisões informadas e eficazes sobre o tratamento do paciente. Com sua precisão incomparável e rapidez inigualável, o Blood IA está na vanguarda da medicina moderna, promovendo melhores resultados e uma qualidade de vida superior para todos os pacientes.
        </p>
        <div className="topic-table">
          <h3>Coleta de dados</h3>
          <p>Recebe dados de amostras sanguíneas, outros dados relevantes.</p>
        </div>
        <div className="topic-table">
          <h3>Diagnóstico</h3>
          <p>Realiza diagnósticos ou prevê riscos de doenças sanguíneas, como diabetes, colesterol alto, anemia, entre outras.</p>
        </div>
        <div className="topic-table">
          <h3>Pré-processamento</h3>
          <p>Os dados coletados passam por um estágio de pré-processamento, onde são limpos para a análise.</p>
        </div>
        <div className="topic-table">
          <h3>Análise de dados</h3>
          <p>A inteligência artificial entra em ação nesta etapa, utilizando algoritmos de machine learning para analisar os dados.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
