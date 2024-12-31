"use client"

import { useEffect } from 'react'
import { toast } from 'sonner'

interface StatusDisplayProps {
  status: string
}

export function StatusDisplay({ status }: StatusDisplayProps) {

  useEffect(() => {
    if (status.startsWith("Error")) {
      toast.error("Whoops!", {
        description: status,
        duration: 3000,
      })
    } 
    else if (status.startsWith("Session established")) {
        toast.success("Agent is ready to help you", {
            description: status,
            duration: 5000,
        })
    }
    else {
      toast.info("Toggling Voice Translation Assistant...", {
        description: status,
        duration: 3000,
      })
    }
  }, [status])
    return null
} 