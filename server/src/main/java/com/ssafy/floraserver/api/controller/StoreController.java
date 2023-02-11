package com.ssafy.floraserver.api.controller;

import com.ssafy.floraserver.api.request.StoreExtraInfoReq;
import com.ssafy.floraserver.api.request.StoreInfoReq;
import com.ssafy.floraserver.api.response.*;
import com.ssafy.floraserver.api.service.StoreService;
import com.ssafy.floraserver.common.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;


@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/stores")
public class StoreController {

    private final StoreService storeService;

    @GetMapping("/regions")
    public Page<RegionRes> findRegionList(@RequestParam String word, Pageable pageable){
        Page<RegionRes> regionList = storeService.findRegionList(word, pageable);

        return regionList;
    }

    @GetMapping
    public Page<StoreListRes> findStoreList(@RequestParam String address, Pageable pageable){

        Page<StoreListRes> storeResList = storeService.findStoreList(address, pageable);

        return storeResList;
    }

    @GetMapping("/{sId}")
    public StoreRes findStore(@PathVariable Long sId){

        StoreRes storeRes = storeService.findStore(sId);

        return storeRes;
    }

    @GetMapping("/{sId}/products")
    public Page<ProductRes> findProductList(@PathVariable("sId") Long sId, Pageable pageable){

        Page<ProductRes> productResList = storeService.findProductList(sId, pageable);

        return productResList;
    }

    @GetMapping("/{sId}/mypage")
    public StoreMypageRes findStoreMypageInfo(@PathVariable("sId") Long sId){
        Map<String, String> authInfo = SecurityUtil.getCurrentUser();
        StoreMypageRes storeMypageRes = storeService.findStoreMypageInfo(sId, authInfo);
        return storeMypageRes;
    }

    @PutMapping("/{sId}")
    public ResponseEntity<?> updateStoreInfo(@PathVariable("sId") Long sId,
                                             @RequestPart("file") MultipartFile file,
                                             @RequestPart("storeInfoReq") StoreInfoReq storeInfoReq){
        Map<String, String> authInfo = SecurityUtil.getCurrentUser();
        storeService.updateStoreInfo(sId,storeInfoReq, file, authInfo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/{sId}/onair")
    public ResponseEntity<?> toggleOnair(@PathVariable("sId") Long sId){
        Map<String, String> authInfo = SecurityUtil.getCurrentUser();
        storeService.toggleOnair(sId, authInfo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
