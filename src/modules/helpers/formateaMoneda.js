
export const formateaMoneda = (monto) => {

    return new Intl.NumberFormat('es-PE', { 
        style: 'currency',
        currency: 'PEN'
    }).format(monto)

}

export const formateaMonedaSinDecimal = (monto) => {

    return new Intl.NumberFormat('es-PE', { 
        style: 'currency',
        currency: 'PEN',
        maximumSignificantDigits: 10
    }).format(monto)

}