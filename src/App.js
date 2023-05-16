import React, { useState } from 'react'
import Papa from 'papaparse'
import _ from 'lodash'
import Histogram from './Histogram'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const handleSubmit = async () => {
    const response = await fetch('https://www.terriblytinytales.com/test.txt')
    const content = await response.text()
    const words = content.split(/\s+/)
    const wordCounts = _.countBy(words)
    const sortedWordCounts = _.orderBy(
      Object.entries(wordCounts),
      ([word, count]) => count,
      'desc'
    )
    const histogramData = sortedWordCounts.slice(0, 20).map(([word, count]) => ({ word, count }))
    setData(histogramData)
  }

  const handleExport = () => {
    const csv = Papa.unparse(data)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'histogram.csv')
    document.body.appendChild(link)
    link.click()
  }

  return (
    <>
   <h1>Terribly Tiny Tales</h1>
    <div className="container">
      <div className="box">
        <button className="button" onClick={handleSubmit}>Submit</button>
        {data && <Histogram data={data} />}
        {data && <button className="button" onClick={handleExport}>Export</button>}
      </div> 
    </div>
    <footer> Umang Raj 12018505</footer>
    </>
  )
}

export default App
