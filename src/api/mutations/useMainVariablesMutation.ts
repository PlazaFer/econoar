import { useMutation } from '@tanstack/react-query'
import { BackendResponse } from 'src/types/Backend'
import bcraApi from '../apiConfig/bcraApi'

export type MainVariables = {
  idVariable: number;
  cdSerie: number;
  descripcion: string;
  fecha: string;
  valor: string;
}

export type MainVariablesResponse = BackendResponse<{
  results: [MainVariables];
}>

const useMainVariablesMutation = () =>
  useMutation({
    mutationFn: () => bcraApi.get<MainVariablesResponse>('estadisticas/v1/PrincipalesVariables')
  })

export default useMainVariablesMutation
