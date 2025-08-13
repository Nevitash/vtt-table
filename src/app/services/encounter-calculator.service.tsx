import { EncounterCalculatorApi, RequestsCalculateEncounterCRsRequest, RequestsMonster }from '../../api-client';

/**
 * A factory function that creates an encounter calculator service.
 * @param apiClient The EncounterCalculatorApi client to use for the call.
 */
export const createEncounterCalcService = (apiClient: EncounterCalculatorApi) => {
  return {
    async calculateCrsForEncounter(request: RequestsCalculateEncounterCRsRequest): Promise<RequestsMonster[]>{
      try {
        const response = await apiClient.encounterCalculatorPost(request);
        return response.data;
      } catch (error) {
        console.error('Error calculating encounter:', error);
        throw error;
      }
    },
    // You can add more API-calling functions here
  };
};

export type EncounterCalcServiceType = ReturnType<typeof createEncounterCalcService>;