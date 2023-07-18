import React, {
  ChangeEvent,
  MouseEventHandler,
  useContext,
  useState,
} from 'react';
import 'assets/styles/form/Button.scss';
import styled from 'styled-components';
import CheckIconUnselected from 'components/svg/CheckIconUnselected copy';
import CheckIconSelected from 'components/svg/CheckIconSelected';

type ButtonProps = {
  id: string;
  radioGroup: string;
  labelName: string;
  value: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function BigRadioButton(props: ButtonProps) {
  const [checked, setRadio] = useState<Boolean>(false);

  function handledRadio(event: ChangeEvent<HTMLInputElement>) {
    console.log('value', event.target.checked);

    if (event.target.checked) {
      setRadio(true);
    } else {
      setRadio(false);
    }
  }

  function returnCheckBox() {
    console.log(checked);

    if (checked) {
      return <CheckIconSelected />;
    }
    return <CheckIconUnselected />;
  }

  return (
    <StyledWrapper>
      <StyledInput
        id={props.id}
        name={props.radioGroup}
        value={props.value}
        type="radio"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handledRadio(e)}
      />
      <StyledLabel htmlFor={props.id}>
        <span>{props.labelName}</span>
        {returnCheckBox()}
      </StyledLabel>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;

const StyledLabel = styled.label`
  max-width: 17rem;
  max-height: 15rem;

  background-color: #fafafa;
  border: 0.2rem solid var(--neutral-scale-n-70, #e6e8e9);
  border-radius: 1.8rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4.2rem;

  font-size: 2rem;
  font-weight: 600;
  color: var(--text-disabled, #9098a2);

  cursor: pointer;

  & > span {
    flex: 1;
    align-self: stretch;
  }
`;

const StyledInput = styled.input`
  display: none;

  &:checked + label {
    max-width: 17rem;
    max-height: 15rem;

    background-color: #434a50;
    border: 0.4rem solid #f0f0f0;

    color: var(--secondary-point-green, #70ff00);
  }
`;
