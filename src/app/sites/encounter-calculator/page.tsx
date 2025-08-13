'use client';

import { useEncounterCalculatorService } from "@/app/config/provider.config";
import { EncounterCalcServiceType } from "@/app/services/encounter-calculator.service";
import { useState } from "react";
import { Plus, Trash2, Loader, Sparkles } from 'lucide-react';
import { RequestsCalculateEncounterCRsRequest, RequestsMonster } from "@/api-client/api";

// This is the main component for the Encounter Calculator page.
// It handles all the UI logic, state management, and calls the service.
export default function EncouterCalculator() {
  // Use the custom hook to get the service instance from the provider.
  const encounterCalculatorService: EncounterCalcServiceType = useEncounterCalculatorService();

  // Define the difficulty options as a constant object.
  const ConfigDifficulty = {
    DIFFICULTY_EASY: 'easy',
    DIFFICULTY_MEDIUM: 'medium',
    DIFFICULTY_HARD: 'hard',
    DIFFICULTY_DEADLY: 'deadly'
  } as const;

  // State to hold the user's input for the calculation request.
  const [crCalculationForEncounterRequest, setCrCalculationForEncounterRequest] = useState<RequestsCalculateEncounterCRsRequest>({
    difficulty: "easy",
    partyLevel: 1,
    partySize: 4,
    monsters: [
      { adjustment: 0 }
    ]
  });

  // State to hold the result of the calculation. We assume the API returns an array of monsters.
  const [result, setResult] = useState<RequestsMonster[] | null>(null);

  // State to manage loading and error states for the API call.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle changes to the party level and size input fields.
  // This uses a controlled component pattern.
  const handlePartyInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };
  
  // Handle changes to a specific monster's adjustment input field.
  const handleMonsterAdjustmentChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newMonsters = [...(crCalculationForEncounterRequest.monsters || [])];
    newMonsters[index] = { ...newMonsters[index], adjustment: Number(value) };
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      monsters: newMonsters
    }));
  };

  // Handle changes to the difficulty dropdown.
  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      difficulty: value as "easy" | "medium" | "hard" | "deadly"
    }));
  };

  // Add a new monster to the monsters array.
  const handleAddMonster = () => {
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      monsters: [...(prev.monsters || []), { adjustment: 0 }]
    }));
  };

  // Remove a monster from the monsters array by index.
  const handleRemoveMonster = (index: number) => {
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      monsters: (prev.monsters || []).filter((_, i) => i !== index)
    }));
  };

  // The function to call the service when the "Calculate" button is clicked.
  const handleCalculate = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      // Call the service with the current state.
      // The API is returning an array of monsters, so we set the result state directly.
      const response = await encounterCalculatorService.calculateCrsForEncounter(crCalculationForEncounterRequest);
      // CORRECTED: The service returns the data directly, not a nested 'result' property.
      setResult(response); 
    } catch (err) {
      console.error(err);
      setError("Failed to calculate encounter. Please check your inputs.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center p-4 sm:p-6 lg:p-8 text-white">
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-6">Encounter Calculator</h1>
        <div className="space-y-6">

          {/* Party Information Section */}
          <div className="p-4 border border-gray-700 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Party Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor="partySize" className="text-sm font-medium text-gray-300 mb-1">Party Size</label>
                <input
                  type="number"
                  id="partySize"
                  name="partySize"
                  value={crCalculationForEncounterRequest.partySize}
                  onChange={handlePartyInfoChange}
                  className="p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  min="1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="partyLevel" className="text-sm font-medium text-gray-300 mb-1">Party Level</label>
                <input
                  type="number"
                  id="partyLevel"
                  name="partyLevel"
                  value={crCalculationForEncounterRequest.partyLevel}
                  onChange={handlePartyInfoChange}
                  className="p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  min="1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="difficulty" className="text-sm font-medium text-gray-300 mb-1">Difficulty</label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={crCalculationForEncounterRequest.difficulty}
                  onChange={handleDifficultyChange}
                  className="p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                >
                  {Object.values(ConfigDifficulty).map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Add Monster Button Section */}
          <div className="flex justify-end mt-4">
            <button
                onClick={handleAddMonster}
                className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition duration-200"
              >
                <Plus size={18} className="mr-2" /> Add Monster
            </button>
          </div>

          {/* Monsters Section */}
          <div className="p-4 border border-gray-700 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-gray-200">Monsters</h2>
            <div className="space-y-4 mt-4">
              {crCalculationForEncounterRequest.monsters && crCalculationForEncounterRequest.monsters.map((monster, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <label htmlFor={`monster-cr-${index}`} className="sr-only">Adjustment for Monster {index + 1}</label>
                  <input
                    type="number"
                    id={`monster-cr-${index}`}
                    value={monster.adjustment}
                    onChange={(e) => handleMonsterAdjustmentChange(index, e)}
                    className="flex-1 p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                    min="0"
                  />
                  {/* The remove button is only shown for monsters after the first one to ensure at least one remains */}
                  {crCalculationForEncounterRequest.monsters!.length > 1 && (
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

          {/* Action Button Section */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleCalculate}
              disabled={isLoading}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader size={20} className="animate-spin mr-2" /> Calculating...
                </>
              ) : (
                <>
                  <Sparkles size={20} className="mr-2" /> Calculate
                </>
              )}
            </button>
          </div>

          {/* Result Display */}
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

          {/* Error Display */}
          {error && (
            <div className="p-4 rounded-xl text-center font-semibold text-lg bg-red-900 text-red-200">
              <p>{error}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
