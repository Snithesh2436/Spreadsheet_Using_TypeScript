import React, { useState } from 'react'

const items = [
  { name: 'Dashboard', icon: '🏠' },
  { name: 'Documents', icon: '📄' },
  { name: 'Settings', icon: '⚙️' },
]

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <aside className="w-48 bg-gray-100 h-full p-4 border-r hidden sm:block">
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className={`flex items-center space-x-2 cursor-pointer px-2 py-2 rounded-md text-sm ${
              activeItem === item.name
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => {
              setActiveItem(item.name)
              console.log(`Sidebar clicked: ${item.name}`)
            }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
