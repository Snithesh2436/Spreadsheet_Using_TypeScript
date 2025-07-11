import React, { useState } from 'react'

const tabList = ['Overview', 'Spreadsheet', 'Insights']

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Spreadsheet')

  const handleClick = (tab: string) => {
    setActiveTab(tab)
    console.log(`Tab clicked: ${tab}`)
  }

  return (
    <div className="flex space-x-4 border-b px-6 pt-4">
      {tabList.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`pb-2 text-sm font-medium ${
            activeTab === tab
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-blue-600 transition-colors duration-150'

          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
