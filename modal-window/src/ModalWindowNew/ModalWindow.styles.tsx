import styled, { css } from "styled-components";
import { ModalWidth } from "./ModalWindow.types";
import {
  overlayAppear,
  modalAppearNarrow,
  modalAppearWide,
} from "./Animations";

export const NewModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: var(--offset-h, 0);
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${overlayAppear};
`;

const NewModal = styled.div<{
  width: ModalWidth;
}>(
  ({ width }) => css`
    max-width: ${width === ModalWidth.Small ? "56rem" : "--100vvw"};
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
    background-color: white;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.25);
    animation: ${modalAppearNarrow};
    @media (min-width: 440px) {
      animation: ${modalAppearWide};
    }
  `
);

export const NewFullHeightModal = styled(NewModal)`
  height: 100%;
  max-height: 94vh;
`;

export const NewCenteredModal = styled(NewModal)`
  max-height: 95vh;
  @media (min-height: 600px) {
    max-height: 85vh;
  }
`;

export const NewModalContent = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding: 0 2.4rem 2.4rem;
`;

export const NewHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NewTitle = styled.h4`
  flex: 1;
  padding: 1.6rem 2.4rem 1.2rem;
  margin: 0;
  line-height: 3.2rem;
  color: #2f3749;
`;

export const NewButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewSingleButtonContainer = styled(NewButtonContainer)`
  justify-content: right;
`;

export const NewModalStickyFooter = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1.6rem 2.4rem;
  background-color: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`;

export const NewFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewFormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const NewTextField = styled.input`
  height: 30px;
  border-radius: 0.4rem;

  &::placeholder {
    font-size: 1.6rem;
  }

  &#currentIban {
    background-color: #f3f3f3;
  }
`;

export const NewHint = styled.h4`
  box-sizing: border-box;
  padding: 1.6rem;
  font-family: "Open Sans";
  background-color: #e7a2341a;
  color: #d1760a;
  width: 100%;
  font-weight: bold;
  font-size: 1.6rem;
  border-radius: 0.4rem;
`;
