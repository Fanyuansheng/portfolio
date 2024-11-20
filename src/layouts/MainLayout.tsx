import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="fixed top-0 w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md z-50">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-primary"
            >
              Portfolio
            </motion.div>
            <Navigation />
          </div>
        </div>
      </header>
      <main className="pt-20">
        {children}
      </main>
      <footer className="container py-8 mt-20">
        <div className="text-center text-gray-600 dark:text-gray-400">
          © 2024 Fanyuansheng. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 