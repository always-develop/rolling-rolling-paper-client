import React from 'react';
import 'assets/styles/views/Home.scss';
import BigRadioButton from 'components/form/BigRadioButton';
import Header from 'views/layouts/Header';

export default function SelectMessageType() {
  return (
    <>
      <Header title="메시지 보내기" />
      <BigRadioButton
        id="test"
        labelName="첫번째"
        radioGroup="test"
        value="first"
      />
      <BigRadioButton
        id="test2"
        labelName="두번째"
        radioGroup="test"
        value="second"
      />
    </>
  );
}
