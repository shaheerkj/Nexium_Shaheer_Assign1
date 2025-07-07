'use client';
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState([])

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('/quotes.json')
      const data = await res.json()
      const quotes = data.quotes
      const filtered = quotes
        .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
        .slice(0, 3)

      setResults(
        filtered.length
          ? filtered
          : [{ quote: "No quotes found for this topic." }]
      )
    } catch (err) {
      setResults([{ quote: "Failed to load quotes." }])
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="topic" className="text-lg font-medium">
            Enter a topic
          </Label>
          <Input
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. motivation"
            className="mt-2 w-full"
          />
        </div>
        <Button type="submit" className="w-full py-2">
          Get Quotes
        </Button>
      </form>

      {results.length > 0 && (
        <div className="mt-8 space-y-4">
          {results.map((item, idx) => (
            <Card key={idx} className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-base">
                  {item.quote}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
