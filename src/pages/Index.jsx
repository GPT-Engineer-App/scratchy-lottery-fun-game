import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScratchCard from '../components/ScratchCard';
import Leaderboard from '../components/Leaderboard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <header className="w-full p-4 flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lucky Scratch
        </motion.h1>
        <nav>
          <Button asChild variant="ghost" className="text-white hover:text-gray-200">
            <Link to="/profile">Profile</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Win Big with Lucky Scratch!</h2>
          <p className="text-xl text-white mb-6">Try your luck and scratch to reveal your prize!</p>
          <Button asChild size="lg" className="bg-yellow-400 text-gray-800 hover:bg-yellow-500">
            <Link to="/games">Play Now</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ScratchCard />
        </motion.div>
      </main>

      <section className="w-full max-w-4xl mx-auto p-4">
        <h3 className="text-2xl font-bold text-white mb-4">Top Winners</h3>
        <Leaderboard />
      </section>

      <footer className="w-full p-4 text-center text-white">
        <p>&copy; 2024 Lucky Scratch. All rights reserved.</p>
        <nav className="mt-2">
          <Link to="/terms" className="mx-2 hover:underline">Terms of Service</Link>
          <Link to="/privacy" className="mx-2 hover:underline">Privacy Policy</Link>
          <Link to="/contact" className="mx-2 hover:underline">Contact Us</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Index;