import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

function Histogram({ data }) {
  return (
    <BarChart width={600} height={400} data={data}>
      <XAxis dataKey="word" />
      <YAxis />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  )
}

export default Histogram
