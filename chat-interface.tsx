'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Ban, Trash2, Send } from 'lucide-react'

interface Message {
  id: number
  content: string
  sender: string
  isUser: boolean
  avatar: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    content: "Hello👋",
    sender: "User",
    isUser: true,
    avatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: 2,
    content: "Yes, my order according to application. Thank you",
    sender: "Bot",
    isUser: false,
    avatar: "/placeholder.svg?height=32&width=32"
  }
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: messages.length + 1,
      content: newMessage,
      sender: "User",
      isUser: true,
      avatar: "/placeholder.svg?height=32&width=32"
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <div className="flex h-screen flex-col bg-neutral-900">
      <div className="border-b border-neutral-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>CJ</AvatarFallback>
            </Avatar>
            <span className="font-medium text-neutral-200">Caressa Jessalin</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Ban className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.isUser ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar>
                <AvatarImage src={message.avatar} />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.isUser
                    ? "bg-pink-200 text-black"
                    : "bg-neutral-800 text-neutral-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-neutral-800 p-4">
        <div className="flex gap-2">
          <Input
            className="bg-neutral-800 border-neutral-700"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

