'use client';

import { useState, useMemo, useEffect } from 'react';

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
const CODES_PER_PAGE = 10;

export const LockerCodeList = ({ codes }: LockerCodeListProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when the filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filteredCodes = useMemo(() => {
    if (activeFilter === 'All') {
      return codes;
    }
    return codes.filter((code) => code.game === activeFilter);
  }, [activeFilter, codes]);

  // Paginate the filtered codes
  const indexOfLastCode = currentPage * CODES_PER_PAGE;
  const indexOfFirstCode = indexOfLastCode - CODES_PER_PAGE;
  const currentCodes = filteredCodes.slice(indexOfFirstCode, indexOfLastCode);

  const totalPages = Math.ceil(filteredCodes.length / CODES_PER_PAGE);

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
                  : 'bg-background-secondary  text-text hover:bg-accent/50'
              }
            `}>
            {game}
          </button>
        ))}
      </div>

      {/* Conditional Rendering: Show message or table */}
      {filteredCodes.length === 0 ? (
        <div className="text-center py-16 px-4 bg-background-secondary  rounded-lg border border-accent/20">
          <p className="text-lg text-text/80">
            There are currently no locker codes available for {activeFilter}.
          </p>
          <p className="text-text/60 mt-2">Please check back later!</p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-background-secondary  border border-accent/20 rounded-lg">
              <thead className="border-b border-accent/20">
                <tr>
                  <th className="p-4 text-left font-bold text-text max-w-xs">Reward</th>
                  <th className="p-4 text-left font-bold text-text">Locker Code</th>
                  <th className="p-4 text-left font-bold text-text hidden md:table-cell">
                    Released
                  </th>
                  <th className="p-4 text-left font-bold text-text">Expires</th>
                </tr>
              </thead>
              <tbody>
                {currentCodes.map((code) => (
                  <CodeRow key={code.code} {...code} activeFilter={activeFilter} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
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
  const isNeverExpires = expiration === 'Never Expires';
  const isLimitedTime = expiration === 'Limited Time';

  let expirationText = expiration;
  let expirationTextColor = 'text-text/80';
  let isExpired = false;

  if (!isNeverExpires && !isLimitedTime) {
    const expirationDate = new Date(expiration);
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    isExpired = expirationDate < now;
    const isExpiringSoon = expirationDate.getTime() - now.getTime() < oneDay && !isExpired;

    if (isExpiringSoon) expirationTextColor = 'text-yellow-500';
    if (isExpired) expirationTextColor = 'text-red-500';
    expirationText = isExpired ? 'Expired' : expirationDate.toLocaleDateString();
  } else if (isNeverExpires) {
    expirationTextColor = 'text-green-500';
  } else if (isLimitedTime) {
    expirationTextColor = 'text-yellow-500';
  }

  return (
    <tr className={`border-b border-accent/10 ${isExpired ? 'opacity-50' : ''}`}>
      <td className="p-4 max-w-xs">
        <p className="font-semibold text-text">{reward}</p>
        {activeFilter === 'All' && <p className="text-xs text-accent mt-1">{game}</p>}
      </td>
      <td className="p-4 font-mono text-primary">{code}</td>
      <td className="p-4 text-text/80 hidden md:table-cell">
        {new Date(releaseDate).toLocaleDateString()}
      </td>
      <td className={`p-4 font-semibold ${expirationTextColor}`}>{expirationText}</td>
    </tr>
  );
};

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-background-secondary  text-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/50 cursor-pointer">
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md font-semibold cursor-pointer ${
            currentPage === number
              ? 'bg-primary text-background'
              : 'bg-background-secondary  text-text hover:bg-accent/50'
          }`}>
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-background-secondary  text-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/50 cursor-pointer">
        Next
      </button>
    </nav>
  );
};
