import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-neutral-800 bg-black">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-semibold text-pink-200">
            Logo
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/explore" className="text-sm text-neutral-400 hover:text-white">
              🏠 Explore
            </Link>
            <Link href="/create" className="text-sm text-neutral-400 hover:text-white">
              ✏️ Create
            </Link>
            <Link href="/edit" className="text-sm text-neutral-400 hover:text-white">
              🔧 Edit
            </Link>
          </nav>
        </div>
        <Button variant="secondary" className="bg-pink-200 text-black hover:bg-pink-300">
          Login
        </Button>
      </div>
    </header>
  )
}

