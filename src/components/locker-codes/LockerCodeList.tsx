// src/components/locker-codes/LockerCodeList.tsx
'use client';

import { useState, useMemo } from 'react';

type LockerCode = {
  releaseDate: string;
  code: string;
  reward: string;
  expiration: string;
  game: string;
};

type LockerCodeListProps = {
  codes: LockerCode[];
};

const games = ['All', 'NBA 2K26', 'NBA 2K25'];

export const LockerCodeList = ({ codes }: LockerCodeListProps) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCodes = useMemo(() => {
    if (activeFilter === 'All') {
      return codes;
    }
    return codes.filter((code) => code.game === activeFilter);
  }, [activeFilter, codes]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
        {games.map((game) => (
          <button
            key={game}
            onClick={() => setActiveFilter(game)}
            className={`
              px-4 py-2 rounded-md font-semibold transition-colors duration-300 cursor-pointer
              ${
                activeFilter === game
                  ? 'bg-primary text-background'
                  : 'bg-[#1F1F22] text-text hover:bg-accent/50'
              }
            `}>
            {game}
          </button>
        ))}
      </div>

      {/* Locker Code Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1F1F22] border border-accent/20 rounded-lg">
          <thead className="border-b border-accent/20">
            <tr>
              <th className="p-4 text-left font-bold text-text max-w-xs">Reward</th>
              <th className="p-4 text-left font-bold text-text">Locker Code</th>
              <th className="p-4 text-left font-bold text-text hidden md:table-cell">Released</th>
              <th className="p-4 text-left font-bold text-text">Expires</th>
            </tr>
          </thead>
          <tbody>
            {filteredCodes.map((code) => (
              <CodeRow key={code.code} {...code} activeFilter={activeFilter} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const CodeRow = ({
  reward,
  code,
  releaseDate,
  expiration,
  game,
  activeFilter,
}: LockerCode & { activeFilter: string }) => {
  const expirationDate = new Date(expiration);
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const isExpired = expirationDate < now;
  const isExpiringSoon = expirationDate.getTime() - now.getTime() < oneDay && !isExpired;

  let expirationTextColor = 'text-text/80';
  if (isExpiringSoon) expirationTextColor = 'text-yellow-500';
  if (isExpired) expirationTextColor = 'text-red-500';

  return (
    <tr className={`border-b border-accent/10 ${isExpired ? 'opacity-50' : ''}`}>
      <td className="p-4 max-w-xs">
        <p className="text-xs text-accent mt-1">{game}</p>
        <p className="font-semibold text-text">{reward}</p>
      </td>
      <td className="p-4 font-mono text-primary">{code}</td>
      <td className="p-4 text-text/80 hidden md:table-cell">
        {new Date(releaseDate).toLocaleDateString()}
      </td>
      <td className={`p-4 font-semibold ${expirationTextColor}`}>
        {isExpired ? 'Expired' : expirationDate.toLocaleDateString()}
      </td>
    </tr>
  );
};
