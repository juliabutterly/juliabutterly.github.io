import React, { FunctionComponent, ReactNode } from "react";
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayContainer,
  OverlayProps,
} from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import { AriaDialogProps } from "@react-types/dialog";
import { ModalWidth } from "./ModalWindow.types";
import {
  ModalOverlay,
  FullHeightModal,
  CenteredModal,
  ModalContent,
  Heading,
  Title,
  ButtonContainer,
} from "./ModalWindow.styles";
import styled from "styled-components";

export interface ModalProps extends OverlayProps, AriaDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fullHeight: boolean;
  name: string;
  title?: string;
  children?: ReactNode;
  width: ModalWidth;
  padded: boolean;
}

const CLOSE = styled.a`
  cursor: pointer;
  color: #006400;
`;

export const ModalDialog: FunctionComponent<ModalProps> = (props) => {
  const { title, children, fullHeight, setIsOpen, width, padded } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = React.useRef(null);
  const { overlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps } = useDialog(
    { ...props, "aria-label": props.name },
    ref
  );

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalOverlay>
      <FocusScope contain restoreFocus>
        {(() => {
          const Modal = fullHeight ? FullHeightModal : CenteredModal;
          const panelProps = {
            ...overlayProps,
            ...dialogProps,
            ...modalProps,
            padded,
            width,
          };
          return (
            <Modal {...panelProps} ref={ref} id="MODAL">
              <Heading>
                <Title>{title}</Title>
                <CLOSE onClick={onClose}>X</CLOSE>
              </Heading>
              <ModalContent className="padded">{children}</ModalContent>
            </Modal>
          );
        })()}
      </FocusScope>
    </ModalOverlay>
  );
};

export const ModalWindow: FunctionComponent<ModalProps> = (props) => {
  return (
    <>
      {props.isOpen && (
        <OverlayContainer>
          <ModalDialog isDismissable {...props}></ModalDialog>
        </OverlayContainer>
      )}
    </>
  );
};

export interface ModalDoubleButtonAreaProps {
  onPrimaryButtonClick: (e?: any) => void;
  onSecondaryButtonClick: (e?: any) => void;
  primaryButtonText: string | JSX.Element;
  secondaryButtonText: string;
}

export const ModalDoubleButtonArea = ({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonText,
  secondaryButtonText,
}: ModalDoubleButtonAreaProps) => (
  <ButtonContainer>
    <button type="button" onClick={onSecondaryButtonClick}>
      {secondaryButtonText}
    </button>
    <button type="submit" onClick={onPrimaryButtonClick}>
      {primaryButtonText}
    </button>
  </ButtonContainer>
);
