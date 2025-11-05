"use client"


import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useVisible } from "@/context/VisibleContext";

const BACKEND_URL = process.env.WS_BACKEND_URL || "";
console.log(BACKEND_URL);
export default function LiveCursor() {
    const [users, setUsers] = useState<Record<string, {x: number, y: number, city: string, country: string}> | null>(null);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const { visible } = useVisible();
    
    useEffect(() => {
        const socket = new WebSocket(BACKEND_URL || "");
        if(!socket) return;
        setSocket(socket);

        socket.onmessage = (e) => {
            const data = JSON.parse(e.data);

             if (data.type === "join") {
                
    setUsers((prev) => ({
            ...prev,
            [data.user.id]: { x: 0, y: 0, city: data.user.city, country: data.user.country },
            }));
        }

            if (data.type === "cursor") {
                setUsers((prev) => ({ ...prev, [data.id]: {x: data.x, y:data.y, city: data.city, country: data.country} 
                }));
            }

            if(data.type === "leave"){
                setUsers((prev) => {
                    const copy = {...prev};
                    delete copy[data.id as keyof typeof copy];
                    return copy;

                })
            }
        }
        return () => socket.close();
    }, []);

   

useEffect(() => {
  if (!socket) return;

        let lastSent = 0;

        const handleMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastSent < 50) return; // throttle to every 50ms

            if (socket.readyState === WebSocket.OPEN) {
            socket.send(
                JSON.stringify({
                type: "cursor",
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
                })
            );
            lastSent = now; // ✅ update timestamp after sending
            }
        };

        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
        }, [socket]);



   return (
    <>
      {visible && users && Object.entries(users).length > 0 &&
  Object.entries(users).map(([id, { x, y }]) => (
    <motion.div
      key={id}
      className="
        absolute 
        pointer-events-none 
        w-2 h-2 
        rounded-full 
        
        
        border dark:border-white/40 border-black/40
        backdrop-blur-[1px]
      "
      style={{
        left: `${x * 100}%`,
        top: `${y * 100}%`,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      transition={{ type: "spring", stiffness: 256, damping: 25 }}
    />
  ))}

    </>
  );
}
