const dynamoDbLib = require("../../libs/dynamodb-lib");
const defaultResponse = require("../../libs/response-lib");
const utils = require("../../libs/utils");

const tableName = process.env.DynamoTableName;

module.exports.main = async (event) => {

  if ( !event.body ) {
    return defaultResponse.failure({ status: "Faltan algunos parametros" });
  }
  const data = JSON.parse(event.body);
  let decodedData = utils.buildFields( data );
  if ( decodedData["success"] === false ) {
    return defaultResponse.failure({ status: decodedData["msg"] });
  }
  decodedData = decodedData["data"];
  const lastIdParams = {
    TableName: tableName,
    KeyConditionExpression: `typeData = :typeData`,
    ExpressionAttributeValues: {
      ":typeData": "people",
    },
    ScanIndexForward: false,
    Limit: 1
  }
  const resultLastId = await dynamoDbLib.call("query", lastIdParams);
  decodedData["id"] = resultLastId.Items[0] ? resultLastId.Items[0].id + 1 : 1;
  console.log(decodedData["id"]);
  decodedData["typeData"] = "people";
  decodedData["creado"] = decodedData["editado"] = new Date().toISOString();
  // TODO: get id and set timestamp created
  const params = {
    TableName: tableName,
    Item: decodedData,
  }
  try {
    await dynamoDbLib.call("put", params);
    return defaultResponse.success( decodedData );
  } catch (e) {
    console.log(e);
    return defaultResponse.failure({ status: e });
  }
};
