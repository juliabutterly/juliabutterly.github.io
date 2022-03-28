import styled, { css } from "styled-components";
import { ModalWidth } from "./ModalWindow.types";
import {
  overlayAppear,
  modalAppearNarrow,
  modalAppearWide,
} from "./Animations";
// import { styled } from "../../theme/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${overlayAppear};
`;

export const Modal = styled.div<{
  width: ModalWidth;
  padded: boolean;
}>(
  ({ width, padded }) => css`
    max-width: ${width === ModalWidth.Wide
      ? "80rem"
      : width === ModalWidth.Small
      ? "56rem"
      : "100vw"};
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    animation: ${modalAppearNarrow};
    @media (min-width: 440px) {
      animation: ${modalAppearWide};
    }
    .padded {
      padding: ${padded ? `0 6rem 8.4rem` : `0 6rem 6 rem`};
    }
  `
);

export const FullHeightModal = styled(Modal)`
  height: 100%;
  max-height: 94vh;
`;

export const CenteredModal = styled(Modal)`
  max-height: 95vh;
  @media (min-height: 600px) {
    max-height: 85vh;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const CloseIcon = styled.img`
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 0 2px 0 0;
  cursor: pointer;
  padding: 15px;
  color: green;
  &:hover {
    background-color: red;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h4`
  flex: 1;
  padding: 10px 12px 20px;
  margin: 0;
  line-height: 12px;
  color: black;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SingleButtonContainer = styled(ButtonContainer)`
  justify-content: right;
`;

export const ModalStickyFooter = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const FormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

export const TextField = styled.input`
  &::placeholder {
    font-size: 20px;
  }

  &#currentIban {
    background-color: grey;
  }
`;

export const Hint = styled.h4`
  padding: 10px;
  font-family: "Open Sans";
  background-color: orange;
  color: black;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  border-radius: 4px;
`;
