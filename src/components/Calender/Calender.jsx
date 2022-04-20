import { useSelector, useDispatch } from 'react-redux';
import { setDates, setSelectedDates } from '../../redux/calenderSlice';

import Card from './Card/Card';
import styles from './Calender.module.scss';
import { useEffect, useState } from 'react';

const CalenderDates = require('./calenderDates');

const Calender = () => {
  const [isLoading, setIsLoading] = useState(true);
  const calender = useSelector((state) => state.calender.dates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDates(CalenderDates()));
    setIsLoading(false);
    console.log('useEffect');
  }, []);

  console.log(calender);

  return (
    <div className={styles.calender}>
      <header className={styles.header}>
        <p>Monday</p>
        <p>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </header>
      <section className={styles.calender}>
        {!isLoading &&
          calender.map((item, index) => (
            <Card
              key={item.id}
              day={item.date}
              event1={item.first_event === undefined ? undefined : item.first_event.name}
              event2={item.second_event === undefined ? undefined : item.second_event.name}
              event3={item.third_event === undefined ? undefined : item.third_event.name}
              onClick={() => dispatch(setSelectedDates(item))}
            />
          ))}
      </section>
    </div>
  );
};

export default Calender;
