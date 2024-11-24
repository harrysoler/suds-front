import "./cards.css";

interface CardProps {
  image: string;
  title: string;
  status: string;
  progress: number;
}

const Card = ({ image, title, status, progress }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-status">Status: {status}</p>
      <div className="card-progress-container">
        <div
          className="card-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="card-progress-text">{progress}%</p>
    </div>
  );
};

export default Card;
