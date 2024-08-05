import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const games = [
  { id: 1, name: "Lucky 7", price: 5, topPrize: 1000 },
  { id: 2, name: "Golden Ticket", price: 10, topPrize: 5000 },
  { id: 3, name: "Mega Millions", price: 20, topPrize: 10000 },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Choose Your Game</h1>
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