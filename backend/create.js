import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";


export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  console.log("dsvedsbvdfsb", data);
  const params = {
    TableName: "Books",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId, // The id of the author
      bookId: uuid.v1(), // A unique uuid
      bookAuthor: data.bookAuthor,
      bookName: data.bookName,
      description: data.description, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestam
    },
  };
  console.log(params);
  await dynamoDb.put(params);

  return params.Item;

});


