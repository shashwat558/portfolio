"use client"
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, X } from 'lucide-react';

const Toast = ({ toastType, message }: { toastType: string, message: string }) => {
  const getBgColor = () => {
    switch (toastType) {
      case "success":
        return "bg-gradient-to-r from-green-400 via-emerald-500 to-green-600";
      case "failure":
        return "bg-gradient-to-r from-red-400 via-rose-500 to-red-600";
      default:
        return "bg-gradient-to-r from-gray-700 to-gray-800";
    }
  };

  const Icon = toastType === "success" ? CheckCircle2 : XCircle;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`w-80 rounded-xl shadow-xl ${getBgColor()} relative overflow-hidden backdrop-blur-md mb-4`}
    >
      
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl" />
      </motion.div>

      
      <div className="relative z-10 px-5 py-4 flex items-start gap-4">
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
            className={`absolute inset-0 ${
              toastType === "success" ? "bg-green-400" : "bg-red-400"
            } rounded-full blur-md`}
          />
          <Icon className="w-7 h-7 text-white relative" strokeWidth={2.5} />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex-1"
        >
          <p className="text-white text-base font-semibold leading-tight">
            {message}
          </p>
          <p className="text-white/70 text-sm mt-1">
            {toastType === "success" ? "Everything went smoothly!" : "Something went wrong."}
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white/70 hover:text-white transition-colors pt-1"
        >
          <X className="w-4 h-4" />
        </motion.button>
      </div>

      <motion.div
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4, ease: "linear" }}
        className={`h-1 ${
          toastType === "success" ? "bg-white/20" : "bg-red-200/20"
        }`}
      />
    </motion.div>
  );
};

export default Toast;
