import React from 'react';
import { RequestsMonster } from "@/api-client/api";

// Define the props type for this component
interface EncounterResultsProps {
  result: RequestsMonster[] | null;
  error: string | null;
}

const EncounterResults: React.FC<EncounterResultsProps> = ({ result, error }) => (
  <>
    {result && (
      <div className={`p-4 rounded-xl font-semibold bg-green-900 text-green-200`}>
        <p className="text-center text-lg mb-2">Calculated Monsters:</p>
        <ul className="space-y-2">
          {result.map((monster, index) => (
            <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 rounded-lg bg-green-800">
              <span className="font-bold">Monster {index + 1}:</span>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <span>CR: <span className="font-bold">{monster.cr}</span></span>
                <span>XP: <span className="font-bold">{monster.xp}</span></span>
                <span>Adj: <span className="font-bold">{monster.adjustment}</span></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}

    {error && (
      <div className="p-4 rounded-xl text-center font-semibold text-lg bg-red-900 text-red-200">
        <p>{error}</p>
      </div>
    )}
  </>
);

export default EncounterResults;