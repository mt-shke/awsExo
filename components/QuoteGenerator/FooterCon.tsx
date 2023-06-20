import Link from "next/link";
import styled from "styled-components";

export const FooterCon = styled.div`
   width: 100vw;
   height: 50px;
   text-align: center;
   font-size: 15px;
   position: absolute;
   bottom: 0;
   color: white;
   z-index: 10;
`;

export const RedSpan = styled.span`
   color: red;
`;

export const FooterLink = styled(Link)`
   color: white;
`;
