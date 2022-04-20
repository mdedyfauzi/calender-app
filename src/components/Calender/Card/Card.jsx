import styles from './Card.module.scss';

const Card = ({ day = '' | 0, event1, event2, event3, onClick }) => {
  return (
    <div className={day.getMonth() !== 4 ? styles.disabled : styles.card} onClick={onClick}>
      <p>{day.getDate()}</p>
      {event1 && <p>{event1}</p>}
      {event2 && <p>{event2}</p>}
      {event3 && <p>{event3}</p>}
    </div>
  );
};

export default Card;
