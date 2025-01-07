import { Chat } from "@/types/chat"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Plus } from 'lucide-react'

interface ChatListProps {
  chats: Chat[]
  activeChat: string
  onChatSelect: (id: string) => void
}

export function ChatList({ chats, activeChat, onChatSelect }: ChatListProps) {
  return (
    <div className="w-80 border-r border-neutral-800 flex flex-col">
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-neutral-200">ALL YOUR CHATS</h2>
        
        <div className="rounded-lg bg-pink-200/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-200">Chat Images: ON</span>
            <Switch defaultChecked />
          </div>
          <p className="mt-2 text-xs text-neutral-400">
            When a bot sends you images, you will be charged one secondary image
          </p>
        </div>

        <div className="space-y-2">
          {chats.map((chat) => {
            const lastMessage = chat.messages[chat.messages.length - 1]
            return (
              <button
                key={chat.id}
                onClick={() => onChatSelect(chat.id)}
                className={`w-full rounded-lg p-2 text-left transition-colors
                  ${activeChat === chat.id ? 'bg-neutral-800' : 'hover:bg-neutral-800/50'}`}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={chat.avatar} alt={chat.name} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 truncate">
                    <div className="text-sm font-medium text-neutral-200">{chat.name}</div>
                    <div className="text-xs text-neutral-400 truncate">
                      {lastMessage ? lastMessage.content : "No messages yet"}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-auto p-4">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 text-neutral-400 hover:text-neutral-200"
        >
          <Plus className="h-4 w-4" />
          Create new bot
        </Button>
      </div>
    </div>
  )
}

