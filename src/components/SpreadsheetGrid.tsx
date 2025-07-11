import React, { useState } from 'react'

const COLS = ['A', 'B', 'C', 'D', 'E', 'F']
const ROWS = 10

type Props = {
  onEdit?: (message: string) => void
}

const SpreadsheetGrid: React.FC<Props> = ({ onEdit }) => {
  const [data, setData] = useState<string[][]>(
    Array.from({ length: ROWS }, () => Array(COLS.length).fill(''))
  )

  const handleChange = (row: number, col: number, value: string) => {
    const updated = [...data]
    updated[row][col] = value
    setData(updated)
    onEdit?.(`Edited cell ${COLS[col]}${row + 1} → "${value}"`)
  }

  return (
    <div className="overflow-auto border rounded-md shadow-sm">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-gray-200"></th>
            {COLS.map((col) => (
              <th key={col} className="border px-4 py-2 bg-gray-200 text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border px-2 py-1 bg-gray-100 font-medium text-center">
                {rowIndex + 1}
              </td>
              {rowData.map((cell, colIndex) => (
                <td key={colIndex} className="border px-2 py-1">
                  <input
                    className="w-full px-1 py-1 outline-none transition-all duration-150 focus:ring-2 focus:ring-blue-400 focus:bg-blue-50 rounded-sm"
                    value={cell}
                    onChange={(e) =>
                      handleChange(rowIndex, colIndex, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpreadsheetGrid
