'use client';

import { EncounterCalculatorApi, UsersApi } from '@/api-client';
import axiosInstance from '@/app/config/axios.config';
import React, { createContext, useContext, ReactNode } from 'react';

// Create the singleton instances
export const encounterCalcApiClient = new EncounterCalculatorApi(undefined, undefined, axiosInstance);
export const userApiClient = new UsersApi(undefined, undefined, axiosInstance);

// Define the shape of the context's value using instance types
interface BackendClientContextType {
    encounterCalculator: EncounterCalculatorApi;
    user: UsersApi;
}

// Create the context with the default value
const ApiClientContext = createContext<BackendClientContextType>({
    encounterCalculator: encounterCalcApiClient,
    user: userApiClient,
});

// Custom hook to easily access all clients
export const useApiClients = () => {
    return useContext(ApiClientContext);
};

// Provider component
interface ApiClientProviderProps {
    children: ReactNode;
}

export const ApiClientProvider = ({ children }: ApiClientProviderProps) => {
    return (
        <ApiClientContext.Provider value={{ encounterCalculator: encounterCalcApiClient, user: userApiClient }}>
            {children}
        </ApiClientContext.Provider>
    );
};