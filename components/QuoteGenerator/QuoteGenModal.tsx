import { Fade, Modal, Backdrop } from "@mui/material";
import React from "react";
import {
   ModalCircularProgress,
   QuoteGeneratorCon,
   QuoteGeneratorModalInnerCon,
   QuoteGeneratorSubTitle,
   QuoteGeneratorTitle,
} from "./QuoteGeneratorElements";
import { ImageBlobCon } from "../animations/AnimationElements";

interface QuoteGenModalProps {
   open: boolean;
   close: () => void;
   processingQuote: boolean;
   setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
   quoteReceived: string | null;
   setQuoteReceived: React.Dispatch<React.SetStateAction<string | null>>;
}

const style = {};

const QuoteGenModal: React.FC<QuoteGenModalProps> = ({
   open,
   close,
   processingQuote,
   setProcessingQuote,
   quoteReceived,
   setQuoteReceived,
}: QuoteGenModalProps) => {
   const wiseDevThing = "Wise dev statement";
   const wiseDevThingAuthor = "JJRRR";
   return (
      <Modal
         id="QuoteGeneratorModal"
         aria-labelledby="spring-modal-quotegeneratormodal"
         aria-describedby="spring-modal-opens-and-closes-quote-generator"
         open={open}
         onClose={close}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <Fade in={open}>
            <QuoteGeneratorCon sx={style}>
               <QuoteGeneratorModalInnerCon>
                  {/* Processing state  */}

                  {processingQuote === true && quoteReceived === null && (
                     <>
                        <ModalCircularProgress size={"8rem"} thickness={2.5} />
                        <QuoteGeneratorTitle>
                           Processing something
                        </QuoteGeneratorTitle>

                        <QuoteGeneratorSubTitle style={{ marginTop: "20px" }}>
                           {wiseDevThing}
                           <br></br>
                           <span>{wiseDevThingAuthor}</span>
                        </QuoteGeneratorSubTitle>
                     </>
                  )}
                  {/* Final state  */}

                  {processingQuote === false && quoteReceived !== null && (
                     <>
                        <QuoteGeneratorTitle>
                           Generated something!
                        </QuoteGeneratorTitle>

                        <QuoteGeneratorSubTitle style={{ marginTop: "20px" }}>
                           <ImageBlobCon></ImageBlobCon>
                        </QuoteGeneratorSubTitle>
                     </>
                  )}
               </QuoteGeneratorModalInnerCon>
            </QuoteGeneratorCon>
         </Fade>
      </Modal>
   );
};
export default QuoteGenModal;
