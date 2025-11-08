"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { useVisible } from "@/context/VisibleContext";
import { database } from "@/lib/firebase";
import { ref, onValue, set, onDisconnect, serverTimestamp, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

interface CursorData {
    x: number;
    y: number;
    city?: string;
    country?: string;
    lastUpdated?: number | object;
}

export default function LiveCursor() {
    const [users, setUsers] = useState<Record<string, {x: number, y: number, city?: string, country?: string}> | null>(null);
    const [showNotification, setShowNotification] = useState(false);
    const { visible } = useVisible();
    const userIdRef = useRef<string>(uuidv4());
    const cursorRef = useRef<{x: number, y: number} | null>(null);
    const notificationShownRef = useRef<boolean>(false);
    
    useEffect(() => {
        if (!database) {
            console.warn('Firebase database not initialized. Check your environment variables.');
            return;
        }
        
        const userId = userIdRef.current;
        const cursorsRef = ref(database, 'cursors');
        const myCursorRef = ref(database, `cursors/${userId}`);

        // Set up my cursor with initial position
        set(myCursorRef, {
            x: 0,
            y: 0,
            lastUpdated: serverTimestamp(),
        }).catch((error) => {
            console.error('Error setting cursor:', error);
        });

        // Set up disconnect handler to remove my cursor when I leave
        onDisconnect(myCursorRef).remove();

        // Listen to all cursor changes
        const unsubscribe = onValue(cursorsRef, (snapshot) => {
            const cursors = snapshot.val();
            if (cursors) {
                const usersData: Record<string, {x: number, y: number, city?: string, country?: string}> = {};
                
                Object.entries(cursors).forEach(([id, data]) => {
                    // Don't include my own cursor
                    const cursorData = data as CursorData;
                    if (id !== userId && cursorData.x !== undefined && cursorData.y !== undefined) {
                        usersData[id] = {
                            x: cursorData.x,
                            y: cursorData.y,
                            city: cursorData.city,
                            country: cursorData.country,
                        };
                    }
                });
                
                setUsers(usersData);
                
                // Show notification when visitors are first detected
                if (Object.keys(usersData).length > 0 && !notificationShownRef.current) {
                    notificationShownRef.current = true;
                    setShowNotification(true);
                    setTimeout(() => {
                        setShowNotification(false);
                    }, 2500); // Show for 2.5 seconds
                }
            } else {
                setUsers(null);
            }
        });

        return () => {
            unsubscribe();
            // Remove my cursor when component unmounts
            remove(myCursorRef);
        };
    }, []);

    useEffect(() => {
        if (!database) {
            console.warn('Firebase database not initialized. Check your environment variables.');
            return;
        }
        
        const userId = userIdRef.current;
        const myCursorRef = ref(database, `cursors/${userId}`);
        let lastSent = 0;

        const handleMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastSent < 50) return; // throttle to every 50ms

            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            cursorRef.current = { x, y };

            // Update cursor position in Firebase
            set(myCursorRef, {
                x,
                y,
                lastUpdated: serverTimestamp(),
            }).catch((error) => {
                console.error('Error updating cursor position:', error);
            });

            lastSent = now;
        };

        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);



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

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border shadow-lg"
          >
            <p className="text-sm text-foreground">
              you can see other visitors also
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
