import { Fade, Modal, Backdrop } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
   ModalCircularProgress,
   QuoteGeneratorCon,
   QuoteGeneratorModalInnerCon,
   QuoteGeneratorSubTitle,
   QuoteGeneratorTitle,
} from "./QuoteGeneratorElements";
import { ImageBlobCon } from "../animations/AnimationElements";
import ImageBlob from "../animations/ImageBlob";
import AnimatedDownloadButton from "../animations/AnimatedDownloadButton";

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
   const [blobUrl, setBlobUrl] = useState<string | null>(null);

   const wiseDevThing = "Wise dev statement";
   const wiseDevThingAuthor = "JJRRR";

   useEffect(() => {
      if (quoteReceived) {
         const binaryData = Buffer.from(quoteReceived, "base64");
         const blob = new Blob([binaryData], { type: "image/png" });
         const blobUrlGenerated = URL.createObjectURL(blob);
         console.log(blobUrlGenerated);
         setBlobUrl(blobUrlGenerated);

         return () => {
            URL.revokeObjectURL(blobUrlGenerated);
         };
      }
   }, [quoteReceived]);

   const handleDownload = () => {
      const link = document.createElement("a");

      if (typeof blobUrl === "string") {
         link.href = blobUrl;
         link.download = "quote.png";
         link.click();
      }
   };

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

                        <QuoteGeneratorSubTitle
                           style={{ marginTop: "20px" }}
                        ></QuoteGeneratorSubTitle>
                        <ImageBlobCon>
                           <ImageBlob
                              quoteReceived={quoteReceived}
                              blobUrl={blobUrl}
                           />
                        </ImageBlobCon>

                        <AnimatedDownloadButton
                           handleDownload={() => handleDownload()}
                        ></AnimatedDownloadButton>
                     </>
                  )}
               </QuoteGeneratorModalInnerCon>
            </QuoteGeneratorCon>
         </Fade>
      </Modal>
   );
};
export default QuoteGenModal;
