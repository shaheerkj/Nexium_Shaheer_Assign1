'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState([])

 async function handleSubmit(e) {
    e.preventDefault();

    try{
        const res = await fetch('/quotes.json');
        const data = await res.json();
        const quotes = data.quotes;

        const filtered = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase()).slice(0, 3)

setResults(filtered.length ? filtered : [{ quote: "No quotes found for this topic." }])


    }
    catch(err){
        setResults([{ quote: "Failed to load quotes." }])
    }
    console.log(results);
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="topic">Enter a topic</Label>
          <Input className="m-4"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. motivation"
          />
        </div>
        <Button type="submit">Get Quotes</Button>
      </form>

      <div className="mt-6 space-y-2">
        {results.map((quote, index) => (
          // <p key={index} className="text-gray-700">{quote.quote}</p>
          <div key={index} className='bg-blue-500 m-2 font-semibold rounded-md'>{quote.quote}</div>
        ))}
      </div>
    </div>
  )
}
