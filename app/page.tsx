"use client"

import React, { useEffect } from "react"
import useWebRTCAudioSession from "@/hooks/use-webrtc"
import { tools } from "@/lib/tools"
import { timeFunction, backgroundFunction, partyFunction, launchWebsite, takeScreenshot, copyToClipboard } from "./components/tools-functions"

const App: React.FC = () => {
  const {
    registerFunction,
  } = useWebRTCAudioSession("ash", tools)

  useEffect(() => {
    // Register all functions
    registerFunction('getCurrentTime', timeFunction)
    registerFunction('changeBackgroundColor', backgroundFunction)
    registerFunction('partyMode', partyFunction)
    registerFunction('launchWebsite', launchWebsite)
    registerFunction('takeScreenshot', takeScreenshot)
    registerFunction('copyToClipboard', copyToClipboard)
  }, [registerFunction])

  return (
    <main className="h-full">
      <h1>Starter Page</h1>
    </main>
  )
}

export default App;