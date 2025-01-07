import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from 'lucide-react'

const chatList = [
  {
    id: 1,
    name: "Caressa Jessalin",
    message: "Lorem ipsum dolor sit am...",
    avatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: 2,
    name: "Letty Bride",
    message: "Lorem ipsum dolor sit am...",
    avatar: "/placeholder.svg?height=32&width=32"
  }
]

export function ChatSidebar() {
  return (
    <div className="w-80 border-r border-neutral-800 bg-black p-4">
      <div className="space-y-4">
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
          {chatList.map((chat) => (
            <button
              key={chat.id}
              className="w-full rounded-lg p-2 text-left hover:bg-neutral-800"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={chat.avatar} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-neutral-200">{chat.name}</div>
                  <div className="text-xs text-neutral-400">{chat.message}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <Button className="w-full justify-start gap-2" variant="ghost">
          <Plus className="h-4 w-4" />
          Create new bot
        </Button>
      </div>
    </div>
  )
}

