
const originalFields = {
    birth_year:     "anoNacimiento",
    eye_color:      "colorOjo",
    films:          "peliculas",
    gender:         "genero",
    hair_color:     "colorCabello",
    height:         "altura",
    homeworld:      "mundoNatal",
    mass:           "masa",
    name:           "nombre",
    skin_color:     "colorPiel",
    created:        "creado",
    edited:         "editado",
    species:        "especies",
    starships:      "naves",
    url:            "url",
    vehicles:       "vehiculos",
};
const typeField = {
    anoNacimiento: "string",
    colorOjo:      "string",
    peliculas:     "object",
    genero:        "string",
    colorCabello:  "string",
    altura:        "string",
    mundoNatal:    "string",
    masa:          "string",
    nombre:        "string",
    colorPiel:     "string",
    creado:        "string",
    editado:       "string",
    especies:      "object",
    naves:         "object",
    url:           "string",
    vehiculos:     "object"
};
const notRequired = [ "created", "edited" ];

traslateFields = ( key ) => {
    if ( typeof key !== "string" )
        throw new Error('traslateFields required one string "key"');
    return originalFields[key] ? originalFields[key] : key ;
}

validateField = ( keyEsp, value ) => {
    let result = { success: false, msg: '' };
    if ( !typeField[keyEsp] ) 
        result['msg'] = "undefined";
    else if ( typeof value !== typeField[keyEsp] ) 
        result['msg'] = "Tipo de dato no válido" + typeof value;
    else
        result['success'] = true;
    return result;
}

exports.buildFields = ( fields, validateExists = true ) => {
    let result = { success: false, msg: '' };
    if ( typeof fields !== "object" || fields.length !== undefined ) {
        result['msg'] = "La data debe ser de tipo diccionario de datos";
    } else {
        let errors = "";
        let filteredData = {};
        for (let k in originalFields) {
            fieldName = ( fields[k] !== undefined
                        ? k 
                        : ( fields[ traslateFields( k ) ] !== undefined
                            ?  traslateFields( k )
                            : undefined )
                        );
            if ( fieldName !== undefined ) {
                const esField = traslateFields( fieldName );
                const validate = validateField(esField, fields[fieldName]);
                if ( validate['success'] === true ) {
                    filteredData[ esField ] = fields[fieldName];
                } else {
                    errors += ( errors === "" ? "" : ' - ') + 
                                `Key ${ k }: ${ validate['msg'] }`
                }
            } else if ( validateExists === true && ! notRequired.includes( k ) ) {
                errors += ( errors === "" ? "" : ' - ') + 
                            `campo obligatorio "${ traslateFields(k) }" no encontrado`;
            }
        }
        if ( errors === "" ) {
            result['success'] = true;
            result['data'] = filteredData
        } else {
            result['msg'] = "Errores: " + errors;
        }
    }
    return result;
}