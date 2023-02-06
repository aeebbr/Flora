package com.ssafy.floraserver.api.response;

import com.ssafy.floraserver.db.entity.Store;
import com.ssafy.floraserver.db.entity.enums.OnAirType;
import lombok.Builder;
import lombok.Getter;

@Getter
public class StoreListRes {

    private Long sId;
    private String sName;
    private String phoneNumber;
    private String region_1depth_name;
    private String region_2depth_name;
    private String region_3depth_name;
    private String address_name;
    private OnAirType isOnair;
    private String start;
    private String end;
    private float lat;
    private float lng;
    private int bookmarkCnt;

    @Builder
    public StoreListRes(Store store) {
        this.sId = store.getSId();
        this.sName = store.getName();
        this.phoneNumber = store.getPhoneNumber();
        this.region_1depth_name = store.getRegion_1depth_name();
        this.region_2depth_name = store.getRegion_2depth_name();
        this.region_3depth_name = store.getRegion_3depth_name();
        this.address_name = store.getAddress_name();
        this.isOnair = store.getIsOnair();
        this.start = store.getStart().getTime();
        this.end = store.getEnd().getTime();
        this.lat = store.getLat();
        this.lng = store.getLng();
        this.bookmarkCnt = store.getBookmarkCnt();
    }
}
