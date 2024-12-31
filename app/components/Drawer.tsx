"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { VoiceSelector } from "@/app/components/VoiceSelector"
import { Settings2 } from "lucide-react"
import { ToolsEducation } from "@/app/components/ToolsEducation"

export function DrawerConfiguration({ value, onValueChange }: { value: string, onValueChange: (value: string) => void }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
        <Settings2 />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Agent Configuration</DrawerTitle>
            <DrawerDescription>Customize yout agent capabilities.</DrawerDescription>
          </DrawerHeader>
          
          <div className="p-4">
            <VoiceSelector value={value} onValueChange={onValueChange} />
            <ToolsEducation />
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
