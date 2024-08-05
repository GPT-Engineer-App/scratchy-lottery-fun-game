import React from 'react';
import ScratchCard from '../components/ScratchCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-4xl font-bold mb-8 text-white">Lottery Scratch-Off Game</h1>
      <ScratchCard />
      <p className="mt-8 text-xl text-white">Scratch the card to reveal your prize!</p>
    </div>
  );
};

export default Index;
