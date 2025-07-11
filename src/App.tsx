import React, { useState } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Sidebar from './components/Sidebar'
import SpreadsheetGrid from './components/SpreadsheetGrid'
import ActivityBar from './components/ActivityBar'

type Log = {
  id: number
  message: string
  timestamp: string
}

const App: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs((prev) => [
      { id: Date.now(), message, timestamp },
      ...prev.slice(0, 19), // keep only 20
    ])
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      <Tabs />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <SpreadsheetGrid onEdit={addLog} />
        </main>
        <ActivityBar logs={logs} />
      </div>
    </div>
  )
}

export default App
