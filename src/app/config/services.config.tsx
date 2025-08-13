import { createEncounterCalcService, EncounterCalcServiceType } from "../services/encounter-calculator.service";
import { encounterCalcApiClient } from "./api-client.config";

export const encounterCalculator: EncounterCalcServiceType = createEncounterCalcService(encounterCalcApiClient)