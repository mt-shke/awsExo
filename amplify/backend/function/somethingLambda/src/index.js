/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

// Image generation packages
const sharp = require("sharp");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");

const updateSomething = async () => {
   const tableName = "";
   const tableId = "14511-51510-522-51151-21261";

   try {
      const thingParams = {
         TableName: tableName,
         Key: {
            id: tableId,
         },
         UpdateExpression: "SET #thingsGenerated = #thingsGenerated + :inc",
         ExpressionAttributeValues: {
            ":inc": 1,
         },
         ExpressionAttributeNames: {
            "#thingsGenerated": "thingsGenerated",
         },
         ReturnValues: "UPDATED_NEW",
      };

      const updateThingObject = await docClient.update(thingParams).promise();
      return updateThingObject;
   } catch (error) {
      console.log("Error updating something: ", error);
   }
};

exports.handler = async (event) => {
   console.log(`EVENT: ${JSON.stringify(event)}`);
   return {
      statusCode: 200,

      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify("Hello from Lambda!"),
   };
};
