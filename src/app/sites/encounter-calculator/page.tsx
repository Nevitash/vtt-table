'use client';

import { useEncounterCalculatorService } from "@/app/config/provider.config";
import { EncounterCalcServiceType } from "@/app/services/encounter-calculator.service";
import { useState } from "react";
import { Plus, Trash2, Loader, Sparkles } from 'lucide-react';
import { RequestsCalculateEncounterCRsRequest } from "@/api-client/api";

// This is the main component for the Encounter Calculator page.
// It handles all the UI logic, state management, and calls the service.
export default function EncouterCalculator() {
  // Use the custom hook to get the service instance from the provider.
  const encounterCalculatorService: EncounterCalcServiceType = useEncounterCalculatorService();

  // State to hold the user's input for the calculation request.
  const [crCalculationForEncounterRequest, setCrCalculationForEncounterRequest] = useState<RequestsCalculateEncounterCRsRequest>({
    difficulty: "easy",
    partyLevel: 1,
    partySize: 4,
    monsters: [
      {
        adjustment: 0
      }
    ]
  });

  // State to hold the result of the calculation.
  const [result, setResult] = useState<number | null>(null);

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

  // Handle changes to a specific enemy's CR input field.
  const handleEnemyCrChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newEnemies = [...crCalculationForEncounterRequest.monsters!];
    newEnemies[index].adjustment = Number(value);
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      enemies: newEnemies
    }));
  };

  // Add a new enemy to the enemies array.
  const handleAddEnemy = () => {
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      enemies: [...prev.monsters!, { adjustedCr: 0 }]
    }));
  };

  // Remove an enemy from the enemies array by index.
  const handleRemoveEnemy = (index: number) => {
    setCrCalculationForEncounterRequest(prev => ({
      ...prev,
      enemies: prev.monsters!.filter((_, i) => i !== index)
    }));
  };

  // The function to call the service when the "Calculate" button is clicked.
  const handleCalculate = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      // Call the service with the current state.
      const response = await encounterCalculatorService.calculateCrsForEncounter(crCalculationForEncounterRequest);
      setResult(response.result); // Assuming the response has a 'result' property
    } catch (err) {
      console.error(err);
      setError("Failed to calculate encounter. Please check your inputs.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">Encounter Calculator</h1>
        <div className="space-y-6">

          {/* Party Information Section */}
          <div className="p-4 border border-gray-200 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Party Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="partysize" className="text-sm font-medium text-gray-600 mb-1">Party Size</label>
                <input
                  type="number"
                  id="partysize"
                  name="partysize"
                  value={crCalculationForEncounterRequest.partySize}
                  onChange={handlePartyInfoChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="partylevel" className="text-sm font-medium text-gray-600 mb-1">Party Level</label>
                <input
                  type="number"
                  id="partylevel"
                  name="partylevel"
                  value={crCalculationForEncounterRequest.partyLevel}
                  onChange={handlePartyInfoChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Enemies Section */}
          <div className="p-4 border border-gray-200 rounded-xl shadow-inner">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Enemies</h2>
              <button
                onClick={handleAddEnemy}
                className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition duration-200"
              >
                <Plus size={18} className="mr-2" /> Add Enemy
              </button>
            </div>
            <div className="space-y-4">
              {crCalculationForEncounterRequest.monsters!.map((enemy, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <label htmlFor={`enemy-cr-${index}`} className="sr-only">Adjusted CR for Enemy {index + 1}</label>
                  <input
                    type="number"
                    id={`enemy-cr-${index}`}
                    value={enemy.adjustment}
                    onChange={(e) => handleEnemyCrChange(index, e)}
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                  />
                  {/* The remove button is only shown for enemies after the first one to ensure at least one remains */}
                  {crCalculationForEncounterRequest.monsters!.length > 1 && (
                    <button
                      onClick={() => handleRemoveEnemy(index)}
                      className="p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-200"
                      aria-label={`Remove Enemy ${index + 1}`}
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Button Section */}
          <div className="flex justify-center">
            <button
              onClick={handleCalculate}
              disabled={isLoading}
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
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

          {/* Result and Error Display */}
          {(result !== null || error) && (
            <div className={`p-4 rounded-xl text-center font-semibold text-lg ${result !== null ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {result !== null && (
                <p>The calculated CR for this encounter is: <span className="font-bold">{result}</span></p>
              )}
              {error && <p>{error}</p>}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
