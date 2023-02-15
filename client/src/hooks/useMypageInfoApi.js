import api from "../utils/api";

import { useSetRecoilState } from "recoil";
import { userState, MyPageNicknameState, MyPagePhoneNumberState } from "../recoil/mypage";
import MyPage from "../pages/myPage/MyPage";

export const useMypageInfoApi = () => {
	const setUser = useSetRecoilState(userState);
	const setMyPageNicknameState = useSetRecoilState(MyPageNicknameState);
	const setMyPagePhoneNumberState = useSetRecoilState(MyPagePhoneNumberState);

	const infoApi = (type, sId) => {
		let url = "";

		if (type === "CUSTOMER") {
			url = `/users`;
		} else {
			url = `/stores/mypage`;
		}

		api({
			method: "GET",
			url: url,
		})
			.then(res => {
				console.log(res.data);
				setUser(res.data);
				setMyPageNicknameState(res.data.user.nickname);
				setMyPagePhoneNumberState(res.data.user.phoneNumber);
			})
			.catch(error => {
				console.log("유저 기본 정보 에러", error);
			});
	};

	return infoApi;
};
