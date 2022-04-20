import { useSelector } from 'react-redux';

import Calender from '../Calender/Calender';
import EventForm from '../EventForm/EventForm';
import styles from './App.module.scss';

const App = () => {
  const isOpen = useSelector((state) => state.calender.isOpen);

  return (
    <main>
      <Calender />
      {isOpen && <EventForm />}
    </main>
  );
};

export default App;
