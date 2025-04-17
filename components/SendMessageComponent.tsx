"use client"

import React, { useRef } from "react"
import { Globe } from "./magicui/globe"
import { motion, useInView } from "framer-motion"

const SendMessageComponent = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [form]

  const handleSubmit = async () => {


  }

  return (
    <div className="w-full flex justify-center px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col items-center gap-10 py-10"
      >
        {/* Globe */}
        <div className="w-full flex justify-center">
          <Globe className="max-w-[400px]" />
        </div>

        {/* Form */}
        <div className="w-full space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-center">Let's Connect</h2>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Available for every timezone 🌍
            </p>
          </div>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-transparent backdrop-blur-2xl"
            />
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 dark:bg-transparent backdrop:blur-2xl rounded-lg px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-transparent backdrop-blur-2xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white dark:bg-white dark:text-black font-medium py-2 px-4 rounded-lg hover:opacity-90 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default SendMessageComponent
