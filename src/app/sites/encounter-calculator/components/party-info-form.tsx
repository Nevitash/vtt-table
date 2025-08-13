import React from 'react';
import StyledInput from '../../components/styled-input';

interface PartyInfoFormProps {
  partyLevel: number;
  partySize: number;
  difficulty: string;
  handlePartyInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDifficultyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  ConfigDifficulty: { [key: string]: 'easy' | 'medium' | 'hard' | 'deadly' };
}

const PartyInfoForm: React.FC<PartyInfoFormProps> = ({ partyLevel, partySize, difficulty, handlePartyInfoChange, handleDifficultyChange, ConfigDifficulty }) => (
  <div className="p-4 border border-gray-700 rounded-xl shadow-inner">
    <h2 className="text-xl font-semibold text-gray-200 mb-4">Party Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col">
        <label htmlFor="partySize" className="text-sm font-medium text-gray-300 mb-1">Party Size</label>
        <StyledInput
          type="number"
          id="partySize"
          name="partySize"
          value={partySize}
          onChange={handlePartyInfoChange}
          min="1"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="partyLevel" className="text-sm font-medium text-gray-300 mb-1">Party Level</label>
        <StyledInput
          type="number"
          id="partyLevel"
          name="partyLevel"
          value={partyLevel}
          onChange={handlePartyInfoChange}
          min="1"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="difficulty" className="text-sm font-medium text-gray-300 mb-1">Difficulty</label>
        <select
          id="difficulty"
          name="difficulty"
          value={difficulty}
          onChange={handleDifficultyChange}
          className="p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        >
          {Object.values(ConfigDifficulty).map(diff => (
            <option key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default PartyInfoForm;