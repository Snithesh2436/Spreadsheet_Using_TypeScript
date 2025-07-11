import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-6 py-3 shadow-sm">
      <div className="text-xl font-bold text-blue-600">📊 Spreadsheet View</div>
      <div className="flex items-center space-x-4">
        <span className="rounded-full bg-blue-500 text-white px-3 py-1 font-medium">
          SG
        </span>
      </div>
    </header>
  )
}

export default Header
