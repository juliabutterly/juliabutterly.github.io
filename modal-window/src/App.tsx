import React from "react";
import styled from "styled-components";
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

const props: ModalProps = {
  isOpen: true,
  fullHeight: false,
  title: "iban",
  name: "modal",
  padded: true,
  width: ModalWidth.Small,
};

const App = (): JSX.Element => (
  <ModalWindow {...props}>
    <FormContainer>
      <FormFields>
        <h4>"IBAN"</h4>
        <p>
          "Votre Novel IBAN sera pris en compte lors de votra paiment du mois
          prochain."
        </p>
        <label>"Current IBAN"</label>
        <TextField disabled placeholder={"FR123456789"} id="currentIban" />
        <label>"New IBAN"</label>
        <TextField id="newIban" />
        <Hint as={"h5"}>
          "Votre IBAN sera pris en compte pour vos contrats d'électricicité
          et/ou de gaz."
        </Hint>
      </FormFields>
      <ModalStickyFooter>
        <ButtonContainer>
          <button type="button">"Button 1"</button>
          <button type="submit">"Button 2"</button>
        </ButtonContainer>
      </ModalStickyFooter>
    </FormContainer>
  </ModalWindow>
);

export default App;
