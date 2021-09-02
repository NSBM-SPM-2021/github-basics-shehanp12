import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    KeyConditionExpression: "bookId = :bookId",
    ExpressionAttributeValues: {
      ":bookId":event.pa,
    },
    // Key: {
    //   // userId:event.requestContext.identity.cognitoIdentityId, // The id of the author
    //   noteId: event.pathParameters.id // The id of the note from the path
    // },
  };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});