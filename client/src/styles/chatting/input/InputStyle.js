import React from "react";
import styled from "styled-components";

export const InputLayout = styled.form`
  display: flex;  
  align-items: center;
  background: #FFEAF5;
  height: 56px;
  border-radius: 10px 10px 0 0;
`;

export const InputText = styled.input`
  border: none;
  border-radius: 10px;
  width: ${props => props.isOwner ? '275px' : '312px'} ;
  height: 40px;
  font-size: 16px;
  margin: ${props => props.isOwner ? '16px 8px 16px 16px' : '16px 16px'} ;
  padding-left: 16px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const InputButton = styled.button`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const InputButtonImage = styled.img`
  width: 26px;
  height: 23px;
  object-fit: contain;
  margin-top: 2px;
`;

export const FormButton = styled(InputButton)`
  margin-right: 8px;
`;

export const FormButtonImage = styled(InputButtonImage)`
  width: 30px;
  height: 28px;
  object-fit: contain;
  margin-left: 2px;
  margin-bottom: 2px;
`;