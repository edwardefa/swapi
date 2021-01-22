const dynamoDbLib = require("../../libs/dynamodb-lib");
const defaultResponse = require("../../libs/response-lib");

const tableName = process.env.DynamoTableName;

module.exports.main = async (event) => {

  if ( !event.pathParameters || !event.pathParameters.id ) {
    return defaultResponse.failure({ status: "Faltan algunos parametros" });
  }
  // const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  const params = {
    TableName: tableName,
    Key: {
      typeData: 'people',
      id: id
    }
  }
  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      return defaultResponse.success( result.Item );
    } else {
      return defaultResponse.notFound({ detail: "Persona no encontrada." });
    }
  } catch (e) {
    console.log(e);
    return defaultResponse.failure({ status: e });
  }
};
