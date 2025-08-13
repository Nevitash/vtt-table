import { EncounterCalculatorApi, UsersApi } from "@/api-client/api";
import axiosInstance from "./axios.config";

export const encounterCalcApiClient = new EncounterCalculatorApi(undefined, undefined, axiosInstance);
export const userApiClient = new UsersApi(undefined, undefined, axiosInstance);