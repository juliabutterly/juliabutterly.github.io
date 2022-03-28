import {
  VisuallyHidden,
  SecondaryCTAButton,
  PrimaryCTAButton,
} from "@ovotech/nebula";
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
  CloseIcon,
  Heading,
  Title,
  ButtonContainer,
  SingleButtonContainer,
} from "./ModalWindow.styles";

export interface ModalProps extends OverlayProps, AriaDialogProps {
  isOpen: boolean;
  fullHeight: boolean;
  name: string;
  title?: string;
  children?: ReactNode;
  width: ModalWidth;
  padded: boolean;
}

export const ModalDialog: FunctionComponent<ModalProps> = (props) => {
  const { title, children, fullHeight, onClose, width, padded } = props;

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
            <Modal {...panelProps} ref={ref}>
              <Heading>
                <Title>{title}</Title>
                {/* <CloseIcon
                  onClick={onClose}
                  name="cross"
                  aria-label="Close pop-up"
                  role="close"
                >
                  <VisuallyHidden>Close pop-up</VisuallyHidden>
                </CloseIcon> */}
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

export type ModalSingleButtonAreaProps = Pick<
  ModalDoubleButtonAreaProps,
  "onPrimaryButtonClick" | "primaryButtonText"
>;

export const ModalDoubleButtonArea = ({
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonText,
  secondaryButtonText,
}: ModalDoubleButtonAreaProps) => (
  <ButtonContainer>
    <SecondaryCTAButton
      type="button"
      onClick={onSecondaryButtonClick}
      fullWidth={"never"}
    >
      {secondaryButtonText}
    </SecondaryCTAButton>
    <PrimaryCTAButton
      type="submit"
      onClick={onPrimaryButtonClick}
      fullWidth={"never"}
    >
      {primaryButtonText}
    </PrimaryCTAButton>
  </ButtonContainer>
);

export const ModalSingleButtonArea = ({
  onPrimaryButtonClick,
  primaryButtonText,
}: ModalSingleButtonAreaProps) => (
  <SingleButtonContainer>
    <PrimaryCTAButton
      type="submit"
      onClick={onPrimaryButtonClick}
      fullWidth={"never"}
    >
      {primaryButtonText}
    </PrimaryCTAButton>
  </SingleButtonContainer>
);
