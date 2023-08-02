import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {

  /*Pick up id from path parameters*/
  const id = event.pathParameters.id
  const command = new GetCommand({
    TableName: "todos",
    Key: {
      id: id
    }
  });

  const results = await docClient.send(command);

  const statusCode = 200

  const body = JSON.stringify(results.Item)

  const headers = { "Access-Control-Allow-Origin": "*" }

  const response = { statusCode, body, headers };

  return response;
};



