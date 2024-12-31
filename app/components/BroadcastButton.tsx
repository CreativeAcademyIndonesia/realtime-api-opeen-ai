import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PhoneCall, PhoneOff } from "lucide-react"

interface BroadcastButtonProps {
  isSessionActive: boolean
  onClick: () => void
}

export function BroadcastButton({ isSessionActive, onClick }: BroadcastButtonProps) {
  return (
    <Button
      variant={isSessionActive ? "destructive" : "default"}
      className="w-full"
      onClick={onClick}
    >
      {isSessionActive ? (
        <>
          <PhoneOff className="w-4 h-4 mr-2" />
          <Badge variant="secondary" className="animate-pulse bg-red-100 text-red-700 mr-2">
            Live
          </Badge>
          Hang Up Agent
        </>
      ) : (
        <>
          <PhoneCall className="w-4 h-4 mr-2" />
          Call Agent
        </>
      )}
    </Button>
  )
} 