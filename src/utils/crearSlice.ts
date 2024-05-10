import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define el tipo de la entidad
interface IEntity {
  id: number;
  // Otras propiedades de la entidad
}

// Define el tipo del estado inicial
interface IInitialState<T extends IEntity> {
  entities: T[];
}

// Define el estado inicial
const initialState: IInitialState<any> = {
  entities: [],
};

// Función para crear un slice genérico para cualquier tipo de entidad
export function createEntitySlice<T extends IEntity>(entityName: string) {
  const entitySlice = createSlice({
    name: `${entityName}State`,
    initialState,
    reducers: {
      setEntities: (state, action: PayloadAction<T[]>) => {
        state.entities = action.payload;
      },
      resetEntities: (state) => {
        state.entities = [];
      },
      // Agrega otras acciones específicas de la entidad si es necesario
    },
  });

  return entitySlice;
}
