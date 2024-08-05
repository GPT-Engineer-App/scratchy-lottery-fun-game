import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const dummyData = [
  { name: "Alice", prize: 100 },
  { name: "Bob", prize: 75 },
  { name: "Charlie", prize: 50 },
  { name: "David", prize: 25 },
  { name: "Eve", prize: 10 },
];

const Leaderboard = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Prize ($)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyData.map((winner, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{winner.name}</TableCell>
            <TableCell className="text-right">{winner.prize}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Leaderboard;