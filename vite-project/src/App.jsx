import { useState } from 'react';
import './App.css';
import Table from "./Table";

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Emircan',
      surname: 'Gürbüz',
      email: 'emircangrz@gmail.com',
      age: '39'
    },
    {
      name: 'Eren Efe',
      surname: 'Yıldız',
      email: 'erenefeyldz@gmail.com',
      age: '25'
    },
    {
      name: 'Can Tekin',
      surname: 'Tekin',
      email: 'cantkn1@gmail.com',
      age: '27'
    },
    {
      name: 'Muharrem',
      surname: 'Kalaycıoğlu',
      email: 'mhrremklycgl@gmail.com',
      age: '31'
    },
    {
      name: 'Sena Sare',
      surname: 'Ergin',
      email: 'snaergin@gmail.com',
      age: '29'
    },
    {
      name: 'Berra',
      surname: 'Demirağ',
      email: 'berrademirağ1@gmail.com',
      age: '23'
    },
    {
      name: 'Rana',
      surname: 'Sevinç',
      email: 'ranasvnc1@gmail.com',
      age: '21'
    },
    {
      name: 'Zuhal',
      surname: 'Kaya',
      email: 'zuhalkaya@gmail.com',
      age: '22'
    },
    {
      name: 'Amine Barçın',
      surname: 'Özadam',
      email: 'abarçinözadam@gmail.com',
      age: '24'
    },
    {
      name: 'Yunus Emre',
      surname: 'Yener',
      email: 'yeneremre@gmail.com',
      age: '222'
    },
    {
      name: 'Berke',
      surname: 'Acar',
      email: 'berkeacar@gmail.com',
      age: '222'
    }
  ]);

  return (
    <div className="p-4">
      <Table
        searchable={true}
        head={[
          { name: 'Ad-Soyad', sortable: true },
          { name: 'E-posta' },
          { name: 'Yaş', sortable: true },
          { name: 'İşlemler', width: 200 }
        ]}
        body={users && users.map((user, key) => ([
          <div key={`${user.name} ${user.surname}`}>{user.name} {user.surname}</div>,
          user.email,
          <div key={`Yaş ${user.age}`}>{user.age}</div>,
          [
            <button key={`${user.email}-edit`} className="px-4 py-2 items-center rounded bg-blue-600 text-white">Düzenle</button>,
            <button
              key={`${user.email}-delete`}
              onClick={() => {
                const tmpUsers = [...users];
                tmpUsers.splice(key, 1);
                setUsers(tmpUsers);
              }}
              className="px-4 py-2 items-center rounded bg-red-600 text-white"
            >
              Sil
            </button>
          ]
        ]))} />
    </div>
  )
}

export default App;
