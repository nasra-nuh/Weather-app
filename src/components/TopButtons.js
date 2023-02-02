import React from 'react'

function TopButtons() {
  const cities = [
    {
      id:1,
      title: 'Nairobi'
    },
    {
      id:2,
      title: 'Juba'
    },
    {
      id:3,
      title: 'Cairo'
    },
    {
      id:4,
      title: 'Dodoma'
    },
    {
      id:5,
      title: 'Kampala'
    },
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map(city => (

          <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons