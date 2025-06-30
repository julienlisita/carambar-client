// src/App.jsx

import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello Tailwind + React!</h1>
            <p className="text-gray-600">
              Si tu vois ce message avec un joli dégradé et un style sympa, Tailwind fonctionne parfaitement.
            </p>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Clique-moi
            </button>
          </div>
        </div>
  )
}

export default App
