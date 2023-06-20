import { useState } from "react";
import styled from "styled-components";

export const QuotesGen = styled.div`
   background-color: transparent;
   display: grid;
   place-content: center;
`;

const apiURL = "https://zenquotes.io/api/random";
const apiURL2 = "https://anapioficeandfire.com/api/characters/583";

const QuotesGenerator: React.FC = () => {
   const [quote, setQuote] = useState<string | null>(null);

   const getRandomQuote = async () => {
      let quoteText, quoteAuthor;
      const response = await fetch(apiURL2);
      const quoteData = await response.json();
      console.log(quoteData);
   };

   return (
      <section>
         <QuotesGen onClick={() => getRandomQuote()}>Get quote</QuotesGen>
         {!!quote && <p>{quote}</p>}
      </section>
   );
};
export default QuotesGenerator;
