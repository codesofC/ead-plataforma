"use client"


import { useState, useEffect } from "react"
import { useFirebase } from "../lib/Firebase/useFirebase"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { TrendingUp } from "lucide-react"


const Graph = () => {

  const [notes, setNotes] = useState([
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ])
  const {userData} = useFirebase()

  const chartConfig = {
    note: {
      label: "Nota",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig


  useEffect(() => {
    if(userData){
      const allNotes = userData.notes.map((notes: any) => notes.semestre.map((s: any) => s.note).reduce((accumulator: number, current: number) => accumulator += current) / notes.semestre.length)

      const data = allNotes.map((valor: number, index:number) => ({
        semestre: `Semestre ${index+1}`,
        note: valor.toFixed(2)
      }))

      setNotes(data)
    }
  }, [])

  console.log(notes);

  return (
    <Card className="w-full sm:w-[450px]">
      <CardHeader>
        <CardTitle>Graficá de notas</CardTitle>
        <CardDescription>
          Indica seu desempenho por semestre
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={notes}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="semestre"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="note"
              type="natural"
              fill="var(--color-note)"
              fillOpacity={0.4}
              stroke="var(--color-note)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Desempenho da media por semestre
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Graph