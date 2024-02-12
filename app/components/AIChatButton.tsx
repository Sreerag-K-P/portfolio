"use client";
import { Bot } from "lucide-react";
import { useState } from "react";
import AChatBox from "./AChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={24} />
      </button>
      <AChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </div>
  );
}
