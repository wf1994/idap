package com.demo.idap.mapper;


import com.demo.idap.entity.CloudAllData;
import com.demo.idap.entity.CloudData;
import com.demo.idap.entity.Cloudsort;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;


@Mapper
@Component
public interface CloudDataMapper {
    //根据level查询每个云
    List<Cloudsort> getCloudSort(@Param("level")int level);
    //根据cloudcode取出指标+中文与单位名
    List<CloudData> getIndexChinese(@Param("cloudcode")int cloudcode);
    //根据cloudcode取出指标+数据
    List<CloudAllData> getIndexData(@Param("cloudcode")int cloudcode);
    //查询三年（2016、2017、2018）的用户量数据-
    public List<CloudAllData> getYearsData(@Param("indexcode") String indexcode,@Param("cloudcode")int cloudcode);
}