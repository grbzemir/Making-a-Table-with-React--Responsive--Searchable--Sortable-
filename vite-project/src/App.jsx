import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from "./Table";

function App() {

  const users = [
    {
      name: 'Emircan',
      surname: 'Gürbüz',
      email: 'emircangrz@gmail.com',
      age: '21'

    },
    {
      name: 'Eren Efe',
      surname: 'Yıldız',
      email: 'erenefeyldz@gmail.com',
      age: '21'

    },
    {
      name: 'Can Tekin',
      surname: 'Tekin',
      email: 'cantkn1@gmail.com',
      age: '21'

    },
    {
      name: 'Muharrem',
      surname: 'Kalaycıoğlu',
      email: 'mhrremklycgl@gmail.com',
      age: '21'

    },
    {
      name: 'Sena Sare',
      surname: 'Ergin',
      email: 'snaergin@gmail.com',
      age: '21'

    },
    {
      name: 'Berra',
      surname: 'Demirağ',
      email: 'berrademirağ1@gmail.com',
      age: '21'

    },
    {
      name: 'Rana',
      surname: 'Sevinç',
      email: 'ranasvnc1@gmail.com',
      age: '21'

    }
  ]



  return (
    <div className="head">
      <Table head={['Ad-Soyad', 'E-posta']}
        body={users.map(user => ([
          user.name,
          user.email,
          user.age,
        ]))} />
    </div>
  )
}

export default App
