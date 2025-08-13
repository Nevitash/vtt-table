'use client';

import { useEncounterCalculatorService } from "@/app/config/provider.config";
import { EncounterCalcServiceType } from "@/app/services/encounter-calculator.service";
import { useState } from "react";
import { Plus, Loader, Sparkles } from 'lucide-react';
import { RequestsCalculateEncounterCRsRequest, RequestsMonster } from "@/api-client/api";
import PartyInfoForm from "./components/party-info-form";
import MonsterList from "./components/monster-list";
import EncounterResults from "./components/encounter-cr-calculator-result";

export default function EncouterCalculator() {
  const encounterCalculatorService: EncounterCalcServiceType = useEncounterCalculatorService();
  const ConfigDifficulty = {
    DIFFICULTY_EASY: 'easy',
    DIFFICULTY_MEDIUM: 'medium',
    DIFFICULTY_HARD: 'hard',
    DIFFICULTY_DEADLY: 'deadly'
  } as const;

  const [crCalculationForEncounterRequest, setCrCalculationForEncounterRequest] = useState<RequestsCalculateEncounterCRsRequest>({
    difficulty: "easy",
    partyLevel: 1,
    partySize: 4,
    monsters: [
      { adjustment: 0 }
    ]
  });

  const [result, setResult] = useState<RequestsMonster[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePartyInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };
  
  const handleMonsterAdjustmentChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newMonsters = [...(crCalculationForEncounterRequest.monsters || [])];
    newMonsters[index] = { ...newMonsters[index], adjustment: Number(value) };
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      monsters: newMonsters
    }));
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      difficulty: value as "easy" | "medium" | "hard" | "deadly"
    }));
  };

  const handleAddMonster = () => {
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      monsters: [...(prev.monsters || []), { adjustment: 0 }]
    }));
  };

  const handleRemoveMonster = (index: number) => {
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      monsters: (prev.monsters || []).filter((_, i) => i !== index)
    }));
  };

  const handleCalculate = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await encounterCalculatorService.calculateCrsForEncounter(crCalculationForEncounterRequest);
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
          <PartyInfoForm
            partySize={crCalculationForEncounterRequest.partySize!}
            partyLevel={crCalculationForEncounterRequest.partyLevel!}
            difficulty={crCalculationForEncounterRequest.difficulty!}
            handlePartyInfoChange={handlePartyInfoChange}
            handleDifficultyChange={handleDifficultyChange}
            ConfigDifficulty={ConfigDifficulty}
          />

          {/* Monsters Section */}
          <MonsterList
            monsters={crCalculationForEncounterRequest.monsters!}
            handleMonsterAdjustmentChange={handleMonsterAdjustmentChange}
            handleRemoveMonster={handleRemoveMonster}
          />
          
          {/* Add Monster Button Section */}
          <div className="flex justify-end mt-4">
            <button
                onClick={handleAddMonster}
                className="flex items-center px-4 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition duration-200"
              >
                <Plus size={18} className="mr-2" /> Add Monster
            </button>
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

          {/* Results Section */}
          <EncounterResults result={result} error={error} />
        </div>
      </div>
    </div>
  );
}