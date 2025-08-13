export type CalculateCrForEncounterRequest = {
  partylevel: number;
  partysize: number;
  enemies: {
    adjustedCr: number;
  }[];
};