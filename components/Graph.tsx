"use client"


import { useState, useEffect } from "react"
import { useFirebase } from "../lib/Firebase/useFirebase"

const { Line } = require("react-chartjs-2")
const { 
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} = require("chart.js")


Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type GraphNotes = {
  labels: string[],
    datasets: [{
      label: string,
      data: number[],
      borderColor: string
    }]
}
const Graph = () => {

  const [notes, setNotes] = useState<GraphNotes>({
    labels: [''],
    datasets: [{
      label: '',
      data: [],
      borderColor: ''
    }]
  })
  const {userData} = useFirebase()


  useEffect(() => {
    setNotes({
      labels: userData?.notes.map((notes: any, _i: any) => `Semestre ${_i + 1}`),
      datasets: [{
        label: "Notas",
        data: userData?.notes.map((notes: any) => notes.semestre.map((s: any) => s.note).reduce((accumulator: number, current: number) => accumulator += current) / notes.semestre.length),
        borderColor:  "rgb(75, 192, 192)"
      }]
    })
  }, [])

  return (
    <Line 
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Graphica de desempenho"
          }
        }
      }} 
      data={notes} 
      className="w-full h-full"
    />
  )
}

export default Graph