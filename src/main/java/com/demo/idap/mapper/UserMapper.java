package com.demo.idap.mapper;

import com.demo.idap.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;


@Mapper
@Component

public interface UserMapper {

    //用户登录
    User userlogin(@Param("username") String username, @Param("password") String password);

    //注册新用户(方式1)
    int adduser(@Param("username") String username, @Param("password") String password, @Param("age") int age);

    //注册新用户（方式2）
    int adduser1(@Param("username") String username, @Param("password") String password, @Param("age") int age);
}
