const cosmosPort = Number(process.env.COSMODB_PORT); // replace with your port
const dbName = process.env.COSMODB_NAME;
const key = process.env.COSMODB_KEY;
const mongodb_url = `mongodb://${dbName}:${key}@${dbName}.documents.azure.com:${cosmosPort}/?ssl=true`;
const mongo_options = { useNewUrlParser: true };
const eventHubConnectionString=process.env.EVENT_HUB_CONNECTION_STRING
const eventHubentityPath=process.env.EVENT_HUB_ENTITY_NAME

module.exports = {  
  mongodb_url,
  mongo_options,
  eventHubConnectionString,
  eventHubentityPath
};
