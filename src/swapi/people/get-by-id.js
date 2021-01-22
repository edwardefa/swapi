const axios = require("axios");
const defaultResponse = require("../../../libs/response-lib");
const utils = require("../../../libs/utils");

const swapiApi = process.env.swapiApi;

module.exports.main = async (event) => {

  if ( !event.pathParameters || !event.pathParameters.id ) {
    return defaultResponse.failure({ detail: "Faltan algunos parametros" });
  }
  const id = event.pathParameters.id;
  const url = `${ swapiApi }/people/${ id }`;
  const response = await axios.get(url);

  try {
    if ( response.status === 200 ) {
      return defaultResponse.success( utils.buildFields( response.data, false ) );
    } else {
      return defaultResponse.notFound({ detail: "Persona no encontrada." });
    }
  } catch (e) {
    console.log(e);
    return defaultResponse.failure({ status: e });
  }
};