import React, { useEffect, useState } from 'react';
import api from './services/api';
import User from './components/User';

interface IUser{
  name: string,
  email?: string //? opcional
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  //useEffect funciona em cada renderização. ex. quando a contagem muda, uma renderização acontece, o que desencadeia outro efeito
  useEffect(() => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    })
  }, []);

  return (
    <div className="App">
      <h1>TypeScript</h1>
      {/** mostrando usuarios*/}
      {users.map(user => <User key={user.name} user={user}/>)}
    </div>
  );
}

export default App;
