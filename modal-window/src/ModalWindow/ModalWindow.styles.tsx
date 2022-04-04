import styled, { css } from "styled-components";
import { ModalWidth } from "./ModalWindow.types";
import {
  overlayAppear,
  modalAppearNarrow,
  modalAppearWide,
} from "./Animations";

export const ModalOverlay = styled.div`
  position: fixed;
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

export const Modal = styled.div<{
  width: ModalWidth;
  padded: boolean;
}>(
  ({ width, padded }) => css`
    max-width: ${width === ModalWidth.Small ? "56rem" : "100vw"};
    width: 100%;
    display: flex;
    flex-direction: column;
    // position: relative;
    position: absolute;
    border-radius: 0.4rem;
    background-color: white;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.25);
    animation: ${modalAppearNarrow};
    @media (min-width: 440px) {
      animation: ${modalAppearWide};
    }

    .padded {
      box-sizing: border-box;
      padding: ${padded ? `0 2.4rem 8.4rem` : `0 2.4rem 2.4rem`};
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

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h4`
  flex: 1;
  padding: 1.6rem 2.4rem 1.2rem;
  margin: 0;
  line-height: 3.2rem;
  color: #2f3749;
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
  box-sizing: border-box;
  width: 100%;
  padding: 1.6rem 2.4rem;
  background-color: white;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

export const FormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const TextField = styled.input`
  height: 30px;
  border-radius: 0.4rem;

  &::placeholder {
    font-size: 1.6rem;
  }

  &#currentIban {
    background-color: #f3f3f3;
  }
`;

export const Hint = styled.h4`
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
