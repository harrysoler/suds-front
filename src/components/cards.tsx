import "./cards.css"; 
import Card from "./card"; 


interface CardData {
  image: string;
  title: string;
  status: string;
  progress: number;
}


const getCardData = (): CardData[] => {
  const basePath = "/images"; 

  return [
    { image: `${basePath}/Tanque.jpg`, title: "Tanques de almacenamiento", status: "Sin Valoración", progress: 0 },
    { image: `${basePath}/Cubierta.jpg`, title: "Cubiertas verdes", status: "Medio", progress: 50 },
    { image: `${basePath}/Pozo.jpg`, title: "Zanjas y pozos de inflitración", status: "Alto", progress: 20 },
    { image: `${basePath}/Balsa.jpg`, title: "Balsa de infiltración", status: "Bajo", progress: 20 },
    { image: `${basePath}/Franja.jpg`, title: "Franjas filtrantes", status: "Bajo", progress: 30 },
    { image: `${basePath}/Drenes.jpg`, title: "Drenajes filtrantes", status: "Alto", progress: 40 },
    { image: `${basePath}/Cuneta.jpg`, title: "Cuneta vegetada seca", status: "Medio", progress: 25 },
    { image: `${basePath}/CunetaHumeda.jpg`, title: "Cuneta vegetada húmeda", status: "Bajo", progress: 35 },
    { image: `${basePath}/Jardin.jpg`, title: "Jardines de lluvia", status: "Alto", progress: 60 },
    { image: `${basePath}/Alcorque.jpg`, title: "Alcorques indundables", status: "Bajo", progress: 45 },
    { image: `${basePath}/Acera.jpg`, title: "Aceras permeables", status: "Bajo", progress: 50 },
    { image: `${basePath}/Tanque2.jpg`, title: "Tanques de almacenamiento de atenuación", status: "Alto", progress: 30 },
    { image: `${basePath}/Cuenca.jpg`, title: "Cuencas de detención", status: "Bajo", progress: 40 },
    { image: `${basePath}/Pozo.jpg`, title: "Estanques y Humedales", status: "Bajo", progress: 55 },
  ];
};

const Cards = () => {
  const cardData = getCardData(); 

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px"}}>SUDs</h1>
      <div className="card-grid">
        {cardData.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            status={data.status}
            progress={data.progress}
          />
        ))}
      </div>
    </main>
  );
};

export default Cards;
