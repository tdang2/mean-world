const cosmosPort = 10255; // replace with your port
const dbName = 'books';
const key = 'MPYByg3ZaGSqrc7u6gBMcj0TUZgWLAXUG5hKOqFc3knNeiLa6ERI9gpv7JH0cHYDPhKPzTrZEnfHZOp6LRVLvw%3D%3D';
const mongodb_url = `mongodb://${dbName}:${key}@${dbName}.documents.azure.com:${cosmosPort}/?ssl=true`;
const mongo_options = { };
const eventHubConnectionString='Endpoint=sb://mean-world.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=v4XsVaC/xe/r63oKmPaYMu4ffvelYZ+BvU4AAR0nJQw='
const eventHubentityPath='mean-world-app'

module.exports = {  
  mongodb_url,
  mongo_options,
  eventHubConnectionString,
  eventHubentityPath
};
