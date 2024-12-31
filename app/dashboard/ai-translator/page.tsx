"use client"

import React, { useEffect, useState } from "react"
import useWebRTCAudioSession from "@/hooks/use-webrtc"
import { tools } from "@/lib/tools"
import { Hero } from "@/app/components/Hero"
import { VoiceSelector } from "@/app/components/VoiceSelector"
import { BroadcastButton } from "@/app/components/BroadcastButton"
import { StatusDisplay } from "@/app/components/StatusDisplay"
import { TokenUsageDisplay } from "@/app/components/TokenUsageDisplay"
import { MessageControls } from "@/app/components/MessageControls"
import { motion } from "framer-motion"
import { timeFunction, backgroundFunction, partyFunction, launchWebsite, takeScreenshot, copyToClipboard } from "@/app/components/tools-functions"
import Transcriber from "@/app/components/Transcriber";
import { DrawerConfiguration } from "@/app/components/Drawer"

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
    <main className="h-screen flex items-center w-full">
        {/* <Transcriber conversation={conversation} /> */}
      <motion.div 
        className="container flex flex-col items-center justify-center mx-auto max-w-4xl p-12 border rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <motion.div 
          className="w-full max-w-2xl bg-card text-card-foreground rounded-xl border shadow-sm p-6 space-y-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          
          <div className="flex items-center gap-2">
            <BroadcastButton 
              isSessionActive={isSessionActive} 
              onClick={handleStartStopClick}
            />
            <DrawerConfiguration value={voice} onValueChange={setVoice} />
          </div>
          
          {status && (
            <motion.div 
              className="w-full flex flex-col gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MessageControls conversation={conversation} msgs={msgs} />
            </motion.div>
          )}
            {msgs.length > 4 && <TokenUsageDisplay messages={msgs} />}
        </motion.div>
        
        {status && <StatusDisplay status={status} />}
      </motion.div>
    </main>
  )
}

export default App;