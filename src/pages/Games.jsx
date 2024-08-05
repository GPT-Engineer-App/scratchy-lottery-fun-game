import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useStripe } from '../hooks/useStripe';

const games = [
  { id: 1, name: "Lucky 7", price: 5, topPrize: 1000 },
  { id: 2, name: "Golden Ticket", price: 10, topPrize: 5000 },
  { id: 3, name: "Mega Millions", price: 20, topPrize: 10000 },
];

const Games = () => {
  const { handleBuyCredits } = useStripe();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Choose Your Game</h1>
        <Button onClick={handleBuyCredits} className="bg-green-500 hover:bg-green-600">
          Buy Credits
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <Card key={game.id}>
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
              <CardDescription>Price: ${game.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Top Prize: ${game.topPrize}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Play Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Games;
