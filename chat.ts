export interface Message {
  id: string
  content: string
  sender: string
  timestamp: string
  isBot: boolean
}

export interface Chat {
  id: string
  name: string
  avatar: string
  messages: Message[]
}

