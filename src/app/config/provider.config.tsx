'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { EncounterCalcServiceType } from '../services/encounter-calculator.service';
import { encounterCalculator } from './services.config';

// Create the singleton instances


// Define the shape of the context's value using instance types
interface AppContext {
    services: {
        encounterCalculator: EncounterCalcServiceType
    }
}

// Create the context with the default value
const ApiClientContext = createContext<AppContext>({
    services: {
        encounterCalculator: encounterCalculator
    }
});

// Custom hook to easily access all clients
export const useApiContext = () => {
    return useContext(ApiClientContext);
};

export const useServices = () => {
    const {services} = useApiContext()
    return services;
};

export const useEncounterCalculatorService = () => {
    const {encounterCalculator} = useServices()
    return encounterCalculator;
};

// Provider component
interface ApiClientProviderProps {
    children: ReactNode;
}

export const ApiClientProvider = ({ children }: ApiClientProviderProps) => {
    return (
        <ApiClientContext.Provider value={{
            services: {
                encounterCalculator: encounterCalculator
            }
        }}>
            {children}
        </ApiClientContext.Provider>
    );
};