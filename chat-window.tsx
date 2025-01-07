'use client'

import { useState } from "react"
import { Chat, Message } from "@/types/chat"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Ban, Send, Trash2 } from 'lucide-react'

interface ChatWindowProps {
  chat: Chat
  onSendMessage: (chatId: string, content: string) => void
}

export function ChatWindow({ chat, onSendMessage }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    onSendMessage(chat.id, newMessage)
    setNewMessage("")
  }

  return (
    <div className="flex-1 flex flex-col bg-neutral-900">
      <div className="border-b border-neutral-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-neutral-200">{chat.name}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-neutral-200">
              <Ban className="h-4 w-4" />
              <span className="sr-only">Block</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-neutral-200">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {chat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                !message.isBot ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar>
                <AvatarImage 
                  src={message.isBot ? chat.avatar : "/placeholder.svg?height=40&width=40"}
                  alt={message.sender} 
                />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  !message.isBot
                    ? "bg-pink-200 text-black"
                    : "bg-neutral-800 text-neutral-200"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs mt-1 opacity-50">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-800 p-4">
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex gap-2"
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 bg-neutral-800 border-neutral-700 focus-visible:ring-pink-200"
          />
          <Button type="submit" className="bg-pink-200 text-black hover:bg-pink-300">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}

