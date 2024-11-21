import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Muhamad',
    last: 'Ramdani',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]

  return (
    <div className="App">
      {/* <Greet name='Ramdani' messageCount={12} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to!!!</Heading>
      </Oscar>
      <Greet name='Ramdani' isLoggedIn={true} />
    </div>
  );
}

export default App;
