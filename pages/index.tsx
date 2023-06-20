import {
   FooterCon,
   FooterLink,
   RedSpan,
} from "@/components/QuoteGenerator/FooterCon";
import QuotesGenerator from "@/components/QuoteGenerator/QuoteGen";
import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";
import { API } from "aws-amplify";
import Head from "next/head";
import { useEffect, useState } from "react";
import { somethingQueryName } from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

interface UpdateInfoData {
   id: string;
   queryName: string;
   thingsGenerated: number;
   createdAt: string;
   updatedAt: string;
}

const isGraphQLResultForSomethingQueryName = (
   response: any
): response is GraphQLResult<{
   somethingQueryName: { items: [UpdateInfoData] };
}> => {
   return (
      response.data &&
      response.data.somethingQueryName &&
      response.data.somethingQueryName.items
   );
};

export default function Home() {
   const [numberOfThings, setNumberOfThings] = useState<number | null>(0);

   const updateInfoData = async () => {
      try {
         const response = await API.graphql<UpdateInfoData>({
            query: somethingQueryName,
            authMode: "AWS_IAM",
            variables: {
               queryName: "LIVE",
            },
         });

         if (!isGraphQLResultForSomethingQueryName(response)) {
            throw new Error("Unexpected response from API.graphql");
         }

         if (!response.data) {
            throw new Error("Response data is underfined");
         }

         const receivedNumOfThings =
            response.data.somethingQueryName.items[0].thingsGenerated;

         setNumberOfThings(receivedNumOfThings);

         console.log("Response: ", response);
      } catch (error) {
         console.log("Error getting info data", error);
      }
   };

   useEffect(() => {
      updateInfoData();
   }, []);

   return (
      <>
         <Head>
            <title>AWS Course</title>
            <meta name="description" content="Aws course project" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {/* Background  */}
         <GradientBackgroundCon>
            <QuotesGenerator />
            <FooterCon>
               <>Quotes generated : {numberOfThings}</>
               <br />
               <RedSpan>to my </RedSpan>
               <FooterLink href="https://www.micheltcha.com">
                  website
               </FooterLink>
            </FooterCon>
         </GradientBackgroundCon>
      </>
   );
}
