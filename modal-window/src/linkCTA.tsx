import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface UpdatePaymentDetailsCTAProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CTA = styled.a`
  cursor: pointer;
  color: #006400;
  text-decoration: underline;
`;

export const LINK: FunctionComponent<UpdatePaymentDetailsCTAProps> = ({
  setShowModal,
}) => {
  const onClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <CTA onClick={onClick}>click here</CTA>
    </>
  );
};
