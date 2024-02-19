'use client'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';






const page = () => {


  const [chartOptions, setChartOptions] = useState({
    xaxis: {
      categories: ["Jan", "Feb"]
    }
  })

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Series 1',
      data: [30, 40],
    }
  ])


  return (
    <div>
      <h1>Sales</h1>
       <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  )
}

export default page