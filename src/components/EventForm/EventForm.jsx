import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEvent } from '../../redux/calenderSlice';

import styles from './EventForm.module.scss';

const EventForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: '',
    time: undefined,
    email: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    dispatch(setEvent(values));
  };

  console.log(values);

  return (
    <div className={styles.eventForm}>
      <div>
        <h1>CREATE EVENT</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={values.name} placeholder="name" onChange={(e) => handleChange(e)} />
          </label>
          <label>
            Time<input type="time" name="time" min="09:00" max="18:00" required value={values.time} onChange={(e) => handleChange(e)}></input>
          </label>
          <label>
            Invitees by email
            <input type="email" name="email" value={values.email} placeholder="example@email.com" onChange={(e) => handleChange(e)} />
          </label>
          <input type="submit" value="Submit" className={styles.button} />
        </form>
      </div>
    </div>
  );
};

export default EventForm;
