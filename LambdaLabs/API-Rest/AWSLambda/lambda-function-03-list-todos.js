import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  console.log(event)

    const command = new ScanCommand({
    TableName: "todos",
  });
  
  const results = await docClient.send(command)
  const statusCode = 200
  const body = JSON.stringify(results.Items)
  const headers = { "Access-Control-Allow-Origin": "*" }
  const response = { statusCode, body, headers };
  return response;
};
