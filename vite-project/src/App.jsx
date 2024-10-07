import { useState } from 'react';
import './App.css';
import Table from "./Table";

function App() {

  const users = [
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
    }
  ]

  return (
    <div className="p-4">
      <Table
        searchable={true}
        head={[
          { name: 'Ad-Soyad', sortable: true },
          { name: 'E-Posta' },
          { name: 'Yaş', sortable: true },
          { name: 'İşlemler', width: 200 },
        ]}
        body={users.map(user => ([
          `${user.name} ${user.surname}`,
          user.email,
          user.age,
          [
            <button key={`${user.email}-edit`} className="px-4 py-2 items-center rounded bg-blue-600 text-white">Düzenle</button>,
            <button key={`${user.email}-delete`} className="px-4 py-2 items-center rounded bg-red-600 text-white">Sil</button>
          ]
        ]))} />
    </div>
  )
}

export default App;
