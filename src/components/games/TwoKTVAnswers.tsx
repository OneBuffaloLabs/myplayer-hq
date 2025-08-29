'use client';

import { useState } from 'react';

type Question = {
  question: string;
  answer: string;
};

type Episode = {
  episode: number;
  questions: Question[];
};

type TwoKTVAnswersProps = {
  episodes: Episode[];
};

export const TwoKTVAnswers = ({ episodes }: TwoKTVAnswersProps) => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | undefined>(
    episodes.length > 0 ? episodes[0] : undefined
  );

  const handleEpisodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const episodeNumber = parseInt(e.target.value, 10);
    const episode = episodes.find((ep) => ep.episode === episodeNumber);
    setSelectedEpisode(episode);
  };

  return (
    <div>
      <div className="mb-8">
        <label htmlFor="episode-select" className="font-bold text-text mr-4">
          Select Episode:
        </label>
        <select
          id="episode-select"
          onChange={handleEpisodeChange}
          className="bg-background-secondary border border-accent/50 rounded-md p-2 cursor-pointer">
          {episodes.map((ep) => (
            <option key={ep.episode} value={ep.episode}>
              Episode {ep.episode}
            </option>
          ))}
        </select>
      </div>

      {selectedEpisode ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-background-secondary border border-accent/20 rounded-lg">
            <thead className="border-b border-accent/20">
              <tr>
                <th className="p-4 text-left font-bold text-text">Question</th>
                <th className="p-4 text-left font-bold text-text">Answer</th>
              </tr>
            </thead>
            <tbody>
              {selectedEpisode.questions.map((item, index) => (
                <tr key={index} className="border-b border-accent/10">
                  <td className="p-4 text-text/90">{item.question}</td>
                  <td className="p-4 font-semibold text-primary">{item.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-text/80">Select an episode to see the answers.</p>
      )}
    </div>
  );
};
