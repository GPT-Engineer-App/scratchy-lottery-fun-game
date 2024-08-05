import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const ScratchCard = () => {
  const [isScratched, setIsScratched] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleScratch = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const scratchedPixels = imageData.data.filter((_, i) => i % 4 === 3 && imageData.data[i] === 0).length;
    const totalPixels = canvas.width * canvas.height;

    if (scratchedPixels / totalPixels > 0.5) {
      setIsScratched(true);
      setIsWinner(Math.random() < 0.3); // 30% chance of winning
      setShowAlert(true);
    }
  };

  const resetCard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#CCCCCC';
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setIsScratched(false);
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative w-64 h-96 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <canvas
          ref={canvasRef}
          width={256}
          height={384}
          onMouseMove={isScratched ? null : handleScratch}
          onTouchMove={isScratched ? null : handleScratch}
          className="absolute inset-0 cursor-pointer"
        />
        {isScratched && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">
              {isWinner ? 'YOU WIN!' : 'Try Again!'}
            </h2>
          </div>
        )}
      </motion.div>
      <Button onClick={resetCard} className="mt-4">New Card</Button>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{isWinner ? 'Congratulations!' : 'Better Luck Next Time!'}</AlertDialogTitle>
            <AlertDialogDescription>
              {isWinner
                ? "You've won the lottery! Claim your prize now!"
                : "Don't give up! Try another card for a chance to win."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ScratchCard;
