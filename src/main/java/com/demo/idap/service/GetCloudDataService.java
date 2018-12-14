package com.demo.idap.service;

import com.demo.idap.entity.CloudAllData;
import com.demo.idap.entity.CloudData;
import com.demo.idap.entity.Cloudsort;
import com.demo.idap.mapper.CloudDataMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
public class GetCloudDataService {
    public CloudDataMapper getCloudatamapper() {
        return cloudatamapper;
    }

    /**
     * 注入dao
     */
    @Autowired
    private CloudDataMapper cloudatamapper;

    //根据level查询出每个云
    public List<Cloudsort> getCloudSort(int level){
        return cloudatamapper.getCloudSort(level);
    }

    //根据cloudcode取出指标+中文与单位名
    public  List<CloudData>  getIndexChinese(int cloudcode){
        return cloudatamapper.getIndexChinese(cloudcode);
    }
    //根据cloudcode取出指标+数据
    public List<CloudAllData> getIndexData(int cloudcode){
        return cloudatamapper.getIndexData(cloudcode);
    }

    //查询三年（2016、2017、2018）的用户量数据-
    public List<CloudAllData> getYearsData(String indexcode,int cloudcode){
        return cloudatamapper.getYearsData(indexcode,cloudcode);
    }

}
