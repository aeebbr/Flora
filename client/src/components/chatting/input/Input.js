import React from 'react';
import sendImage from '../../../assets/MessageSendImage.png';
import formImage from '../../../assets/FormImage.png';

import {useRecoilValue} from "recoil";
import {nameState} from "../../../recoil/chatting";
import {firstFormSendMessage, sendMessage} from "../../../utils/chatting";
import {FormButton, FormButtonImage, InputButton, InputButtonImage, InputLayout, InputText} from "../../../styles/chatting/input/InputStyle";

function Input ({ message, setMessage }) {
  const name = useRecoilValue(nameState)

  const isOwner = name === '사장';

  return (
    <InputLayout>
      <InputText type='text' placeholder="메시지를 입력하세요." value={message} isOwner={isOwner} onChange={(event) => setMessage(event.target.value)}/>
      {isOwner && <FormButton onClick={e => firstFormSendMessage(e)}>
        <FormButtonImage src={formImage} alt=""/>
      </FormButton>}
      <InputButton onClick={e => sendMessage(e, message, setMessage)}>
        <InputButtonImage src={sendImage} alt="#"/>
      </InputButton>
    </InputLayout>
  )
}

export default Input;