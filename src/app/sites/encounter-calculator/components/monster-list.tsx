import React from 'react';
import { Trash2 } from 'lucide-react';
import { RequestsMonster } from "@/api-client/api";
import StyledInput from '../../components/styled-input';

// Define the props type for this component
interface MonsterListProps {
  monsters: RequestsMonster[];
  handleMonsterAdjustmentChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveMonster: (index: number) => void;
}

const MonsterList: React.FC<MonsterListProps> = ({ monsters, handleMonsterAdjustmentChange, handleRemoveMonster }) => (
  <div className="p-4 border border-gray-700 rounded-xl shadow-inner">
    <h2 className="text-xl font-semibold text-gray-200">Monsters</h2>
    <div className="space-y-4 mt-4">
      {monsters && monsters.map((monster, index) => (
        <div key={index} className="flex items-center space-x-2">
          <label htmlFor={`monster-cr-${index}`} className="sr-only">Adjustment for Monster {index + 1}</label>
          <StyledInput
            type="number"
            id={`monster-cr-${index}`}
            value={monster.adjustment}
            onChange={(e) => handleMonsterAdjustmentChange(index, e)}
            min="0"
          />
          {monsters.length > 1 && (
            <button
              onClick={() => handleRemoveMonster(index)}
              className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-200"
              aria-label={`Remove Monster ${index + 1}`}
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MonsterList;