package com.ssafy.floraserver.api.response;

import com.ssafy.floraserver.db.entity.Store;
import com.ssafy.floraserver.db.entity.TimeUnit;
import com.ssafy.floraserver.db.entity.enums.OnAirType;
import lombok.Builder;
import lombok.Getter;

@Getter
public class StoreRes {

    private Long sId;
    private String sName;
    private String phoneNumber;
    private String sido;
    private String gugun;
    private String dong;
    private String detailedAddress;
    private String holiday;
    private OnAirType isOnair;
    private String start;
    private String end;
    private int bookmarkCnt;
    private int reviewCnt;

    public StoreRes(Long sId, String sName, String phoneNumber, String sido, String gugun, String dong, String detailedAddress, String holiday, OnAirType isOnair, String start, String end, int bookmarkCnt, int reviewCnt) {
        this.sId = sId;
        this.sName = sName;
        this.phoneNumber = phoneNumber;
        this.sido = sido;
        this.gugun = gugun;
        this.dong = dong;
        this.detailedAddress = detailedAddress;
        this.holiday = holiday;
        this.isOnair = isOnair;
        this.start = start;
        this.end = end;
        this.bookmarkCnt = bookmarkCnt;
        this.reviewCnt = reviewCnt;
    }

    @Builder
    public StoreRes(Store store) {
        this.sId = store.getSId();
        this.sName = store.getName();
        this.phoneNumber = store.getPhoneNumber();
        this.sido = store.getSido();
        this.gugun = store.getGugun();
        this.dong = store.getDong();
        this.detailedAddress = store.getDetailedAddress();
        this.holiday = store.getHoliday();
        this.isOnair = store.getIsOnair();
        this.start = store.getStart().getTime();
        this.end = store.getEnd().getTime();
        this.bookmarkCnt = store.getBookmarkCnt();
        this.reviewCnt = store.getReviewCnt();
    }
}
