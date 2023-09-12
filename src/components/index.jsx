import { useEffect, useState } from 'react';
import '../components/blocos.css';


function CinemaData({ genero }) {
  const [cinemaData, setCinemaData] = useState([]);
  const api = `https://raw.githubusercontent.com/anaclaracampos/projetoAPI/main/${genero}.json`;

  useEffect(() => {
    const fetchCinemaData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Erro');
        }
        const data = await response.json();
        setCinemaData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCinemaData();
  }, [api]);

  return (
    <div>
      <h2 className="titulo">Informações</h2>

      <div className="blocos">
        {cinemaData.map((cinema, index) => (
          <div key={index} className="bloco">
            <img src={cinema.imagem}/>
            <h3>Nome: {cinema.nome}</h3>
            <p>Gênero: {cinema.genero}</p>
            <p>Criador: {cinema.criador}</p>
            <p>Sinopse: {cinema.sinopse}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CinemaData;