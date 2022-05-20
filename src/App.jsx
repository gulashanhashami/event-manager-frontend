
import { Route, Routes } from 'react-router-dom';
import { AddEvent } from './components/AddEvent';
import { EditEvent } from './components/EditEvent';
import { EventDetails } from './components/EventDetails';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addevent' element={<AddEvent />} />
        <Route path=':_id/edit' element={<EditEvent />} />
        <Route path=':_id/detail' element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
