import { configureStore } from '@reduxjs/toolkit'
import { articuloManufacturadoSlice } from '../slices/slicesUnificados'
import { articuloInsumoSlice } from '../slices/slicesUnificados' 
import { promocionSlice } from '../slices/slicesUnificados'
import { categoriaSlice } from '../slices/slicesUnificados'
import { empresaSlice } from '../slices/slicesUnificados'
import { sucursalSlice } from '../slices/slicesUnificados'
import { empleadoSlice } from '../slices/slicesUnificados'
import modal from '../slices/modal'
import tabla from '../slices/tabla'
import { unidadMedidaSlice } from '../slices/slicesUnificados'

export const store = configureStore({
  reducer: {
    articuloManufacturado: articuloManufacturadoSlice.reducer,
    articuloInsumo: articuloInsumoSlice.reducer, 
    promocion: promocionSlice.reducer,
    categoria: categoriaSlice.reducer,
    empresa: empresaSlice.reducer,
    empleado: empleadoSlice.reducer,
    sucursal: sucursalSlice.reducer,
    modal: modal,
    tabla: tabla,
    unidadMedida: unidadMedidaSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
