import React from 'react'

type Activity = {
  id: number
  message: string
  timestamp: string
}

type Props = {
  logs: Activity[]
}

const ActivityBar: React.FC<Props> = ({ logs }) => {
  return (
    <div className="bg-gray-50 border-l w-64 p-4 overflow-y-auto hidden lg:block">
      <h2 className="font-semibold text-gray-700 mb-2">Activity Log</h2>
      <ul className="space-y-2 text-sm">
        {logs.map((log) => (
          <li key={log.id} className="text-gray-600">
            <div className="font-medium">{log.message}</div>
            <div className="text-xs text-gray-400">{log.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityBar
