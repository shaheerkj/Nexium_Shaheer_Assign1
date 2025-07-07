'use client';
// 1. Basic ShadCN Form using React and Tailwind (TypeScript to JavaScript)
// Assuming you have already set up ShadCN via `npx shadcn@latest init`

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function QuoteForm({ onSubmit }) {
  const [topic, setTopic] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(topic)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4 mx-auto mt-10">
      <div>
        <Label htmlFor="topic">Enter a topic</Label>
        <Input
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. motivation"
        />
      </div>
      <Button type="submit">Get Quotes</Button>
    </form>
  )
}
