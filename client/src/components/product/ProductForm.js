import React, { useState } from "react";

import { SetRecoilState, useRecoilState } from "recoil";
import { nameState, productState } from "../../recoil/productForms";

import TextareaAutosize from "react-textarea-autosize";

import { UploadPicture } from "../store/UploadPicture";

import {
	UploadPictureWrapper,
	InputWrapper,
	FormWrapper,
	TextLimit,
	BottomBorderInput,
	BorderTextAreaAuto,
	ValidTextWrapper,
} from "../../styles/product/productForm/ProductFormStyle";
import { GrayText, ValidText } from "../../styles/common/CommonStyle";
import { priceComma } from "../../hooks/priceComma";

function ProductForm({
	// name,
	// setName,
	// price,
	// setPrice,
	// description,
	// setDescription,
	nameValidMessage,
	priceValidMessage,
	descriptionValidMessage,
}) {
	const [product, setProduct] = useRecoilState(productState);

	const [nameCount, setNameCount] = useState(0);
	const [descriptionCount, setDescriptionCount] = useState(0);

	const handleChangeNameValue = e => {
		// setName(e.target.value);
		setProduct({ ...product, name: e.target.value });
		setNameCount(e.target.value.length);
	};

	const handleChangePriceValue = e => {
		// 천 단위로 콤마(,)
		// setPrice(
		// 	priceComma(e.target.value)
		// 		.toString()
		// 		.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		// );
		setProduct({
			...product,
			price: priceComma(e.target.value)
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
		});
	};

	const handleChangeDescriptionValue = e => {
		// setDescription(e.target.value);
		setProduct({
			...product,
			description: e.target.value,
		});
		setDescriptionCount(e.target.value.length);
	};

	return (
		<>
			<UploadPictureWrapper>
				<UploadPicture />
			</UploadPictureWrapper>
			<FormWrapper>
				<InputWrapper>
					<BottomBorderInput
						type="text"
						placeholder="상품명을 입력해주세요."
						maxLength={50}
						onChange={handleChangeNameValue}
						value={product?.name}
					/>
					{nameValidMessage && (
						<ValidTextWrapper>
							<ValidText>{nameValidMessage}</ValidText>
						</ValidTextWrapper>
					)}
					<TextLimit>
						<GrayText size="11">{nameCount} / 50자</GrayText>
					</TextLimit>
				</InputWrapper>
				<InputWrapper>
					<div>
						<BottomBorderInput
							type="text"
							placeholder="가격을 입력해주세요."
							onChange={handleChangePriceValue}
							value={product?.price}
						/>
						<p>원</p>
					</div>
					{priceValidMessage && <ValidText>{priceValidMessage}</ValidText>}
				</InputWrapper>
				<InputWrapper>
					<BorderTextAreaAuto
						minRows={5}
						placeholder="상품 상세 설명을 입력해주세요."
						maxLength={500}
						onChange={handleChangeDescriptionValue}
						value={product?.description}
					/>
					<TextLimit>
						<GrayText size="11">{descriptionCount} / 500자</GrayText>
					</TextLimit>
					{descriptionValidMessage && (
						<ValidTextWrapper>
							<ValidText>{descriptionValidMessage}</ValidText>
						</ValidTextWrapper>
					)}
				</InputWrapper>
			</FormWrapper>
		</>
	);
}

export default ProductForm;
