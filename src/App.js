  import React, { useState } from 'react';
  import { FiSearch } from 'react-icons/fi'; // Usado para icones
  import { encontrarMelhorPetShop } from './calcularPetShop'; // Importando a função de encontrar o melhor petshop
  import './styles.css'; 

  function App() {
    const [data, setData] = useState('');
    const [cãesPequenos, setCãesPequenos] = useState(0);
    const [cãesGrandes, setCãesGrandes] = useState(0);
    const [melhorPetShop, setMelhorPetShop] = useState(null);
    const [diaDaSemana, setDiaDaSemana] = useState('');

    const calcularDiaJuliano = (dataStr) => {
      const [dia, mes, ano] = dataStr.split('/').map(Number);
      
        let anoCorrigido = ano;
      let mesCorrigido = mes;
      
      if (mesCorrigido < 3) {
        anoCorrigido -= 1;
        mesCorrigido += 12;
      }
      
      let C;
      if (new Date(dataStr) >= new Date('1582-10-15')) {
        C = 2 - Math.floor(anoCorrigido / 100) + Math.floor(Math.floor(anoCorrigido / 100) / 4);
      } else {
        C = 0;
      }
      
      const D = Math.floor(365.25 * (anoCorrigido + 4716));
      const E = Math.floor(30.6001 * (mesCorrigido + 1));
      
      const diaJuliano = D + E + dia + C - 1524;
      const restoDivisao = diaJuliano % 7;
      
      switch (restoDivisao) {
        case 0: return 'segunda-feira';
        case 1: return 'terça-feira';
        case 2: return 'quarta-feira';
        case 3: return 'quinta-feira';
        case 4: return 'sexta-feira';
        case 5: return 'sábado';
        case 6: return 'domingo';
        default: return '';
      }
    };

    const handleEncontrarMelhorPetShop = () => {
      const dia = calcularDiaJuliano(data);
      const diaDaSemana = (dia === 'sábado' || dia === 'domingo') ? 'fim_de_semana' : 'dia_de_semana';
      
      setDiaDaSemana(dia);
      
      const resultado = encontrarMelhorPetShop(cãesPequenos, cãesGrandes, diaDaSemana);
      setMelhorPetShop(resultado);
    };

    return (
      <div>
        <div className="container">
          <h1 className="title">O Melhor PetShop para você</h1>
        </div>

        <div className="containerInput">
          <h2>Digite a Data (DD/MM/AAAA)</h2>
          <input 
            type="text"
            placeholder="Digite a Data (DD/MM/AAAA), Quantidade de cães Pequenos e Grandes. Ex: 03/08/2018 3 5"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <h2>Quantidade de cães pequenos</h2>
          <input 
            type="number"
            placeholder="Quantidade de cães pequenos"
            value={cãesPequenos}
            onChange={(e) => setCãesPequenos(Number(e.target.value))}
          /> 
          <h2>Quantidade de cães grandes</h2>
          <input 
            type="number"
            placeholder="Quantidade de cães grandes"
            value={cãesGrandes}
            onChange={(e) => setCãesGrandes(Number(e.target.value))}
          />
          <button className="buttonSearch" onClick={handleEncontrarMelhorPetShop}>
            <FiSearch size={25} color='#FFF' />
          </button>
        </div>

        <main className='main'>
          {melhorPetShop && (
            <div>
              <h2>Melhor PetShop</h2>
              <span>PetShop: {melhorPetShop.petShop}</span>
              <span>Valor Total: R$ {melhorPetShop.custo.toFixed(2)}</span>
              <span>Dia da semana: {diaDaSemana}</span>
            </div>
          )}
        </main>
      </div>
    );
  }

  export default App;
