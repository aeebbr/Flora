import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	ButtonsContainer,
	FloLiveButtonContainer,
	FlorMarkWrapper,
} from "../../styles/storeDetail/StoreDetailButtonsStyle";

import { Primary400Button, Primary50Button } from "../../styles/button/ButtonStyle";

import floMarkGraySrc from "../../assets/floMarkGray.png";
import floMarkPinkSrc from "../../assets/floMarkPink.png";
import liveTvSrc from "../../assets/live-tv-white.png";

function StoreDetailButtons(props) {
	const navigate = useNavigate();

	// 더미 데이터
	const floMark = 100;
	const [isFloMarkClicked, setIsFloMarkClicked] = useState(false);

	const handleFloMarkClick = () => {
		setIsFloMarkClicked(!isFloMarkClicked);
	};

	return (
		<>
			{/* 사장, 고객 조건부 렌더링 */}
			<ButtonsContainer isCustomer={true}>
				{/* 고객 */}
				<>
					{/* 꽃갈피 */}
					<FlorMarkWrapper onClick={handleFloMarkClick} isFloMarkClicked={isFloMarkClicked}>
						<img src={isFloMarkClicked ? floMarkPinkSrc : floMarkGraySrc} alt="flomark-icon" />
						<div>{floMark}</div>
					</FlorMarkWrapper>
					{/* 플로라이브 신청 버튼 */}
					<FloLiveButtonContainer>
						<Primary400Button>
							<img src={liveTvSrc} alt="live-tv-icon" />
							플로라이브 신청
						</Primary400Button>
					</FloLiveButtonContainer>
				</>
			</ButtonsContainer>
			{/* 사장 */}
			<ButtonsContainer isCustomer={false}>
				<>
					<Primary400Button>가게 정보 수정</Primary400Button>
					<Primary50Button onClick={() => navigate("/product/add")}>상품 등록</Primary50Button>
				</>
			</ButtonsContainer>
		</>
	);
}

export default StoreDetailButtons;
