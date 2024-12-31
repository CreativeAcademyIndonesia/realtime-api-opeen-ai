"use client"

import React, { useEffect, useState } from "react"
import useWebRTCAudioSession from "@/hooks/use-webrtc"
import { tools } from "@/lib/tools"
import { Hero } from "./components/Hero"
import { VoiceSelector } from "./components/VoiceSelector"
import { BroadcastButton } from "./components/BroadcastButton"
import { StatusDisplay } from "./components/StatusDisplay"
import { TokenUsageDisplay } from "./components/TokenUsageDisplay"
import { MessageControls } from "./components/MessageControls"
import { ToolsEducation } from "./components/ToolsEducation"
import { motion } from "framer-motion"
import { timeFunction, backgroundFunction, partyFunction, launchWebsite, takeScreenshot, copyToClipboard } from "./components/tools-functions"

const App: React.FC = () => {
  // State for voice selection
  const [voice, setVoice] = useState("ash")

  // WebRTC Audio Session Hook
  const {
    status,
    isSessionActive,
    registerFunction,
    handleStartStopClick,
    msgs,
    conversation
  } = useWebRTCAudioSession(voice, tools)

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