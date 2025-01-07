'use client'

import { useState } from "react"
import { ChatList } from "@/components/chat-list"
import { ChatWindow } from "@/components/chat-window"
import { Chat, Message } from "@/types/chat"

const initialChats: Chat[] = [
  {
    id: "1",
    name: "Caressa Jessalin",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: "1",
        content: "Hello👋",
        sender: "You",
        timestamp: "2:39 PM",
        isBot: false
      },
      {
        id: "2",
        content: "Yes, my order according to application. Thank you",
        sender: "Caressa",
        timestamp: "2:40 PM",
        isBot: true
      }
    ]
  },
  {
    id: "2",
    name: "Letty Bride",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: "1",
        content: "Hi there! How can I help you today?",
        sender: "Letty",
        timestamp: "10:00 AM",
        isBot: true
      }
    ]
  }
]

export function ChatLayout() {
  const [chats, setChats] = useState<Chat[]>(initialChats)
  const [activeChat, setActiveChat] = useState<string>(chats[0].id)
  
  const handleSendMessage = (chatId: string, content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isBot: false
    }

    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === chatId 
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    )
  }

  return (
    <div className="flex h-screen bg-black">
      <ChatList 
        chats={chats} 
        activeChat={activeChat}
        onChatSelect={setActiveChat}
      />
      <ChatWindow 
        chat={chats.find(chat => chat.id === activeChat)!}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}

