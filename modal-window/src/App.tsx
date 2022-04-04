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
import { NewModalProps, NewModalWindow } from "./ModalWindowNew/ModalWindow";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LINKS = styled.div`
  display: flex;
  flex-direction: column;
`;

const REPORT = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 20px;
  border: 1px solid black;
  background-color: white;
  z-index: 1;
`;

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const props: ModalProps = {
    isOpen: showModal,
    setIsOpen: setShowModal,
    fullHeight: false,
    title: "iban",
    name: "modal",
    padded: true,
    width: ModalWidth.Small,
  };

  const newProps: NewModalProps = {
    isOpen: showNewModal,
    setIsOpen: setShowNewModal,
    fullHeight: false,
    title: "iban",
    name: "modal",
    padded: true,
    width: ModalWidth.Small,
  };

  // const onFocus = () => {
  //   const a = document.getElementById("MODAL");
  //   a!.style.bottom = "270px";
  //   console.log("hello");
  // };

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
              <label htmlFor="currentIban">Current IBAN</label>
              <TextField
                disabled
                placeholder={"FR123456789"}
                id="currentIban"
                name="currentIban"
              />
              <label htmlFor="input1">New IBAN</label>
              <TextField id="newIban" name="input1" />
              {/* <TextField id="newIban" name="input1" onFocus={onFocus} /> */}
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

      {showNewModal && (
        <NewModalWindow {...newProps}>
          <FormContainer>
            <FormFields>
              <h4>IBAN</h4>
              <p>
                Votre Novel IBAN sera pris en compte lors de votra paiment du
                mois prochain.
              </p>
              <label htmlFor="currentIban">Current IBAN</label>
              <TextField
                disabled
                placeholder={"FR123456789"}
                id="currentIban"
                name="currentIban"
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
          </FormContainer>
          <ModalStickyFooter>
            <ButtonContainer>
              <button type="button">Button 1</button>
              <button type="submit">Button 2</button>
            </ButtonContainer>
          </ModalStickyFooter>
        </NewModalWindow>
      )}

      <LINKS>
        <LINK text="click here to open old modal" setShowModal={setShowModal} />
        <LINK
          text="click here to open NEW modal"
          setShowModal={setShowNewModal}
        />
      </LINKS>
      <REPORT>
        {`VV = ${window.visualViewport.height}, WI = ${window.innerHeight}`}
      </REPORT>
    </>
  );
};

export default App;
