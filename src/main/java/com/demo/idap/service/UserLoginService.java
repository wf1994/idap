package com.demo.idap.service;


import com.demo.idap.entity.User;
import com.demo.idap.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserLoginService {
    /**
     * 注入dao
     */
    @Autowired
    private UserMapper usermapper;
    //用户登录
    public User userlogin(String username,String password){
        User user = usermapper.userlogin(username,password);
        return user;
    }
    //注册新用户
    public int adduser(String username,String password,int age){
        return usermapper.adduser(username,password,age);
    }
}
