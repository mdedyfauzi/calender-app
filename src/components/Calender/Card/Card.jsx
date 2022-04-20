import styles from './Card.module.scss';

const Card = ({ day = '' | 0, event, onClick }) => {
  return (
    <div className={day.getMonth() !== 4 ? styles.disabled : styles.card} onClick={onClick}>
      <p>{day.getDate()}</p>
      {event && event.map((item) => <p>{item.name}</p>)}
    </div>
  );
};

export default Card;
