import React, { useState } from "react";
import styled from "styled-components";
import { LINK } from "./linkCTA";
import { ModalProps, ModalWindow } from "./ModalWindow/ModalWindow";
import {
  FormContainer,
  FormFields,
  Hint,
  ModalStickyFooter,
  TextField,
} from "./ModalWindow/ModalWindow.styles";
import { ModalWidth } from "./ModalWindow/ModalWindow.types";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const props: ModalProps = {
    isOpen: showModal,
    setIsOpen: setShowModal,
    fullHeight: false,
    title: "iban",
    name: "modal",
    padded: true,
    width: ModalWidth.Small,
  };

  return (
    <>
      {showModal && (
        <ModalWindow {...props}>
          <FormContainer>
            <FormFields>
              <h4>IBAN</h4>
              <p>
                Votre Novel IBAN sera pris en compte lors de votra paiment du
                mois prochain.
              </p>
              <label>Current IBAN</label>
              <TextField
                disabled
                placeholder={"FR123456789"}
                id="currentIban"
              />
              <label htmlFor="input1">New IBAN</label>
              <TextField id="newIban" name="input1" />
              <label htmlFor="input2">New IBAN</label>
              <TextField id="1" name="input2" />
              <label htmlFor="input3">New IBAN</label>
              <TextField id="2" name="input3" />
              <label htmlFor="input4">New IBAN</label>
              <TextField id="3" name="input4" />
              <label htmlFor="input5">New IBAN</label>
              <TextField id="4" name="input5" />
              <Hint as={"h5"}>
                Votre IBAN sera pris en compte pour vos contrats d'électricicité
                et/ou de gaz.
              </Hint>
            </FormFields>
            <ModalStickyFooter>
              <ButtonContainer>
                <button type="button">Button 1</button>
                <button type="submit">Button 2</button>
              </ButtonContainer>
            </ModalStickyFooter>
          </FormContainer>
        </ModalWindow>
      )}
      <LINK setShowModal={setShowModal} />
    </>
  );
};

export default App;
