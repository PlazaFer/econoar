import { useQuery } from '@tanstack/react-query'
import { BackendResponse } from 'src/types/Backend'
import bcraApi from '../apiConfig/bcraApi'

export type MainVariables = {
  idVariable: number
  cdSerie: number
  descripcion: string
  fecha: string
  valor: string
}

export type MainVariablesResponse = BackendResponse<[MainVariables]>

const useMainVariablesQuery = () =>
  useQuery({
    queryKey: ['mainvariables'],
    queryFn: () => bcraApi.get<MainVariablesResponse>('estadisticas/v1/PrincipalesVariables').then((response) => response.data),
    enabled: true,
    refetchInterval: 120000
  })

export default useMainVariablesQuery
