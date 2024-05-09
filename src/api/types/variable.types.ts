enum VariableType {
    ReservasInternacionales = 1,
    TipoCambioMinorista = 4,
    TipoCambioMayorista = 5,
    TasaPoliticaMonetaria = 6,
    BADLARPesosBancosPrivados = 7,
    TM20PesosBancosPrivados = 8,
    TasasOperacionesPaseActivasBCRA1DiaPlazo = 9,
    TasasOperacionesPasePasivasBCRA1DiaPlazo = 10,
    TasasInteresPrestamosEntidadesFinancierasPrivadasBAIBAR = 11,
    TasasInteresDepositos30DiasPlazoEntidadesFinancieras = 12,
    TasaInteresPrestamosAdelantosCuentaCorriente = 13,
    TasaInteresPrestamosPersonales = 14,
    BaseMonetariaTotalMillonesPesos = 15,
    CirculacionMonetariaMillonesPesos = 16,
    BilletesMonedasPoderPublicoMillonesPesos = 17,
    EfectivoEntidadesFinancierasMillonesPesos = 18,
    DepositosBancosCtaCtePesosBCRA = 19,
    DepositosEfectivoEntidadesFinancierasTotalMillonesPesos = 21,
    DepositosCuentasCorrientesNetoUtilizacionFUCO = 22,
    DepositosCajaAhorrosMillonesPesos = 23,
    DepositosPlazoInversionesExcluyeCEDROSMillonesPesos = 24,
    M2PrivadoPromedioMovil30DiasVariacionInteranual = 25,
    PrestamosEntidadesFinancierasSectorPrivadoMillonesPesos = 26,
    InflacionMensualVariacionPorcentaje = 27,
    InflacionInteranualVariacionPorcentajeIA = 28,
    InflacionEsperadaREMMedianiaVariacionPorcentajeIA = 29,
    CERBase220021 = 30,
    UnidadValorAdquisitivoUVAPesosBase313201601405 = 31,
    UnidadViviendaUVIPesosBase313201601405 = 32,
    TasaPoliticaMonetariaEAPorcentaje = 34,
    BADLARPesosBancosPrivadosEAPorcentaje = 35,
    IndiceContratosLocacionICLLey27551Base306201 = 40,
    TasasOperacionesPasePasivasBCRA1DiaPlazoEAPorcentaje = 41,
  }

  export const type = {
    tasa: [9,10,11,12,13,14,34,41,35,7,6],
    depositos: [19,21,22,23,24],
    tipoCambio: [4,5],
    inflacion: [27,28,29],
    monetario: [15,16,17,18],
    reservas: [1]
  }
  
  export default VariableType;
  