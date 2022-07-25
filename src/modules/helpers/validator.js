
export const controlFormLogin = [
    { id: 1, campo: 'tipoDoc', long: 1, regex: /(?=.*[0-9]).{1}/, msg:'Seleccionar tipo de documento' },
    { id: 2, campo: 'document', long: 8, regex: /([0-9]){8}/, msg:'Documento debe incluir 8 números' },
    { id: 3, campo: 'cell', long: 9, regex: /9([0-9]){8}/, msg:'Debe incluir 9 caracteres empezando con 9' },
    { id: 4, campo: 'placa', long: 6, regex: /[0-9A-Za-z]{6}/, msg:'Placa debe incluir 6 caracteres' },
    { id: 5, campo: 'aprobacion', long: 1, regex: '', msg:'Debe aceptar los términos y condiciones' }
]