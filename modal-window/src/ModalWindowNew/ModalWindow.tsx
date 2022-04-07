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
  NewModalOverlay,
  NewFullHeightModal,
  NewCenteredModal,
  NewModalContent,
  NewHeading,
  NewTitle,
  NewButtonContainer,
  NewModalStickyFooter,
} from "./ModalWindow.styles";
import styled from "styled-components";

export interface NewModalProps extends OverlayProps, AriaDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fullHeight: boolean;
  name: string;
  title?: string;
  children?: ReactNode;
  width: ModalWidth;
  withButtons?: boolean;
}

const CLOSE = styled.a`
  cursor: pointer;
  color: #006400;
`;

export const NewModalDialog: FunctionComponent<NewModalProps> = (props) => {
  const { title, children, fullHeight, setIsOpen, width, withButtons } = props;

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
    <NewModalOverlay>
      <FocusScope contain restoreFocus>
        {(() => {
          const Modal = fullHeight ? NewFullHeightModal : NewCenteredModal;
          const panelProps = {
            ...overlayProps,
            ...dialogProps,
            ...modalProps,
            width,
            withButtons,
          };
          return (
            <Modal {...panelProps} ref={ref}>
              <NewHeading>
                <NewTitle>{title}</NewTitle>
                <CLOSE onClick={onClose}>X</CLOSE>
              </NewHeading>
              <NewModalContent>{children}</NewModalContent>
              {withButtons && (
                <NewModalStickyFooter>
                  <NewButtonContainer>
                    <button type="button">Button 1</button>
                    <button type="submit">Button 2</button>
                  </NewButtonContainer>
                </NewModalStickyFooter>
              )}
            </Modal>
          );
        })()}
      </FocusScope>
    </NewModalOverlay>
  );
};

export const NewModalWindow: FunctionComponent<NewModalProps> = (props) => {
  return (
    <>
      {props.isOpen && (
        <OverlayContainer>
          <NewModalDialog isDismissable {...props}></NewModalDialog>
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
  <NewButtonContainer>
    <button type="button" onClick={onSecondaryButtonClick}>
      {secondaryButtonText}
    </button>
    <button type="submit" onClick={onPrimaryButtonClick}>
      {primaryButtonText}
    </button>
  </NewButtonContainer>
);
